import React from 'react';

export default function List(props) {
    //компонент списка
    return (
        <ul>
            {props.children(props.items)}
        </ul>
    )
}
