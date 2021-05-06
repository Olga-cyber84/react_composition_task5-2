import React from 'react'

export default function ListItemTV(props) {
    //компонент для отображения списка, состоящего из: времени и 2-х текстовых блоков с ссылками
    const {time, hrefProgramm, hrefChannel, titleProgramm, titleChannel} = props;
    return (
        <li>
            <span>{time} </span>
            <a href={hrefProgramm}>{titleProgramm}</a>
            <a href={hrefChannel}>{titleChannel}</a>
        </li>
    )
}
