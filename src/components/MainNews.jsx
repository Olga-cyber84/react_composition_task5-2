import React from 'react'
import List from './List'
import ListItem from './ListItem'

export default function MainNews({chosenNews}) {
    //отвечает за отображение ТОП-5 новостей, выбранных в компоненте HeaderBlock, используются блоки List и ListItem, т.к. есть иконка, заголовок с ссылкой
    const items = chosenNews;
    return (
        <List items={items}>
            {items => items.map((item, index) => <ListItem key={index} {...item} />)}
        </List>
    )
}
