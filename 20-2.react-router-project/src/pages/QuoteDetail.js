import {Route, useParams} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
    {
        id: 'q1',
        author: 'MAX',
        text: 'Learning React is shit'
    },
    {
        id: 'q2',
        author: 'NICK',
        text: 'Learning React is shit'
    }
];

const QuoteDetail = () =>{
    const params = useParams();

    const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId)

    if(!quote){
        return <p>
            NO Quote Found
        </p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        {/*Nested Route: The way urls can be created dynamically with having the id intact*/}
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments></Comments>
        </Route>
    </Fragment>
}

export default QuoteDetail