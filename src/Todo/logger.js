
function logger(reducer){


    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev State:', prevState)
        console.log('Action:', action)

        const newSate = reducer(prevState, action)

        console.groupEnd(action.type)
        console.log('Next State:', newSate)


        return newSate
    }
}

export default logger