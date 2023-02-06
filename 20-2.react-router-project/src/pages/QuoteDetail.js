import {Route, useParams, Link, useRouteMatch} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
    const {quoteId} = params;

    useEffect(()=>{
        sendRequest(quoteId);
    },[sendRequest, quoteId]);

    if (status === 'pending') {
        return(
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        )
    }

    if (error){
        return <p className='centered'>
            {error}
        </p>
    }

    if(!loadedQuote.text){
        return <p>No quote found!</p>;
    }

    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Route path={match.path} exact>
            <div className='centered'>
                <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat'>Load Comment</Link>
            </div>
        </Route>
        {/*Nested Route: The way urls can be created dynamically with having the id intact*/}
        <Route path={`${match.path}/comments`}>
            <Comments></Comments>
        </Route>

    </Fragment>
}

export default QuoteDetail