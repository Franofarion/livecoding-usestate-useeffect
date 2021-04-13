import React, { useEffect, useState } from 'react';
import Quote from './Quote';

export default function QuoteList() {

    const [quotes, setQuotes] = useState([]);
    const [nextQuotes, setNextQuotes] = useState(20);

    useEffect(() => {
        fetch(`https://api.quotable.io/quotes?skip=${nextQuotes}`)
            .then(response => response.json())
            .then(data => {
                setQuotes([...quotes, ...data.results]);
            });
    }, [nextQuotes])

    return (
        <div>
            <h4>Quote list (number: {nextQuotes})</h4>
            {quotes.map(quote => {
                return (
                    // <Quote key={quote._id} author={quote.author} content={quote.content} />
                    <Quote key={quote._id} {...quote} />
                )
            })}
            <button onClick={() => { setNextQuotes(nextQuotes + 20) }} >Next </button>
        </div>
    )
}