import React from 'react';
import HeaderLine from './HeaderLine';
import List from './List';
import ListItem from './ListItem';

export default function RegionMap() {
    //отвечает за вывод информации о регионе
    const source={
        source: "/#",
        className: "german-map"
    }
    const items = [
        {
            title: "Расписание",
            href: "/#"
        }
    ]
    return (
        <>
            <HeaderLine source={source}>Карта Германии</HeaderLine>
            <List items={items}>
                {items => items.map((item, index) => <ListItem key={index} {...item} />)}
            </List>          
        </>
    )
}
