import { useState } from 'react'
import ListItems from './ListItems'

const MyList = () => {

    const theList = [
        'Buy food for Marina',
        'Fix carb on my Honda motorcycle',
        'Register truck for dad-in-law'
    ]

    return (
        <div>
            <h1> Things I should stop procrastinating:</h1>
            <ul>
                <ListItems
                    task={theList}
                />
            </ul>
        </div>
    )
}

export default MyList