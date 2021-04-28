import React from 'react';
import HeaderLine from './HeaderLine';
import List from './List';
import ListItem from './ListItem';

export default function Visiting() {
    //отвечает за вывод информации о посещаемых страницах
    //для заголовка используется компонент HeaderLine
    //для содержимого - компонент списка
    const source={
        source: "/#",
        className: "visiting"
    }
    const items = [
        {
            title: "Недвижимость",
            text: "- о сталинках",
            href: "/#"
        },
        {
            title: "Маркет",
            text: "- люстры и светильники",
            href: "/#"
        },
        {
            title: "Авто.ру",
            text: "- привод 4х4 до 500 000",
            href: "/#"
        }
    ]
    return (
        <>
            <HeaderLine source={source}>Посещаемое</HeaderLine>
            <List items={items}>
                {items => items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
            </List>            
        </>
    )
}
