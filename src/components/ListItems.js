import { useState } from 'react'

const ListItems = (props) => {
    let toDoItems = props.task.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    )
    )

    return <li>{toDoItems}</li>
}

export default ListItems