import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
    return <QuoteList quotes ={DUMMY_DATA}></QuoteList>
}

export default AllQuotes;