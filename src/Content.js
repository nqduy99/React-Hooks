import { memo } from 'react';

// Context
// ComA => ComB => ComC

function Content( {count, onIncrease} ) {
    console.log('Re-render')    

    return (
        <>
            <h1>Hello Anh Em</h1>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )     
}

export default memo(Content);