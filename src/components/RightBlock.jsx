import React from 'react';
import List from './List';
import ListItem from './ListItem';

export default function RightBlock({rightBlockData}) {
    //отвечает за отображение правого блока вверху страницы, используется список из 1 элемента, т.к. есть иконка, заголовок с ссылкой и описание
    const items = rightBlockData;
    return (
        <List items={items}>
            {items => items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
        </List>
    )
}
