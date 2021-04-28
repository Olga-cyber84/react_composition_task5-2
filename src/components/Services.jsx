import React from 'react';
import List from './List';
import ListItem from './ListItem';

export default function Services({services}) {
    //отвечает за вывод списка сервисов, используется список без иконки и описания
    const items = services;
    return (
        <div className="services">
            <List items={items}>
                {items => items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
            </List>
        </div>
    )
}
