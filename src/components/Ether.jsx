import React from 'react'
import HeaderLine from './HeaderLine';
import List from './List';
import ListItem from './ListItem';
import logo from '.././logo.svg';

export default function Ether(props) {
    //отвечает за вывод информации о программах в эфире
    //для заголовка используется компонент HeaderLine
    //для содержимого - компонент списка
    const items = [
        {
            icon: logo,
            title: "Управление как искусство",
            text: "Успех",
            href: "/#"
        },
        {
            icon: logo,
            title: "Ночь. Мир в это время",
            text: "earthTV",
            href: "/#"
        },
        {
            icon: logo,
            title: "Андрей Воснесенский",
            text: "Совершенно секретно",
            href: "/#"
        }
    ]
    const source = {
        source: "/#",
        className: "ether"
    }
    return (
        <>
            <HeaderLine source={source}>Эфир</HeaderLine>
            <List items={items}>
                {items => items.map((item, index) => <ListItem key={index} {...item} />)}
            </List>
        </>
    )
}
