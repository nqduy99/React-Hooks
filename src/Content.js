import { memo } from 'react';
import {useEffect, useLayoutEffect, useState} from 'react'

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