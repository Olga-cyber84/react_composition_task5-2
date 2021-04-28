import React from 'react';
import HeaderLine from './HeaderLine';
import List from './List';
import ListItemTV from './ListItemTV';

export default function TvProgramm() {
    //отвечает за вывод информации о программах по ТВ каналам
    //для заголовка используется компонент HeaderLine
    //для содержимого - компонент списка
    const items = [
        {
            time: "02:00",
            titleProgramm: "ТНТ. Best",
            titleChannel: "ТНТ International",
            hrefProgramm: "/#",
            hrefChannel: "/#"
        },
        {
            time: "02:15",
            titleProgramm: "Джинглики",
            titleChannel: "Карусель INT",
            hrefProgramm: "/#",
            hrefChannel: "/#"
        },
        {
            time: "02:25",
            titleProgramm: "Наедине со всеми",
            titleChannel: "Первый",
            hrefProgramm: "/#",
            hrefChannel: "/#"
        }
    ]
    const source = {
        source: "/#",
        className: "tv-programm"
    }
    return (
        <>
            <HeaderLine source={source}>Телепрограмма</HeaderLine>
            <List items={items}>
                {items => items.map((item, index) => <ListItemTV key={index}>{item}</ListItemTV>)}
            </List>
        </>
    )
}

