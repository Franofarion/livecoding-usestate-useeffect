import React from 'react';

export default function Quote({ author, content }) {

    return (
        <div>
            {author} - {content}
            <hr />
        </div>
    )
}