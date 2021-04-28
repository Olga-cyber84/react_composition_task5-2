import React from 'react'

export default function ListItemTV(props) {
    //компонент для отображения списка, состоящего из: времени и 2-х текстовых блоков с ссылками
    return (
        <li><span>{props.children.time}</span> <a href={props.children.hrefProgramm}>{props.children.titleProgramm}</a> <a href={props.children.hrefChannel}>{props.children.titleChannel}</a></li>
    )
}
