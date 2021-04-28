import React from 'react';


export default function ListItem(props) {
    //компонент элементов списка, показывает разные варианты списка в зависимости от переданных в props данных: иконка, заголовок с ссылкой, текст-описание
    return (
        props.children.icon !== undefined && props.children.text !== undefined
            ? <li><a href={props.children.href}><img srс={props.children.icon} alt="logo"/> {props.children.title}</a><span>{props.children.text}</span></li>
            : props.children.icon !== undefined && props.children.text === undefined
                ? <li><a href={props.children.href}><img srс={props.children.icon} alt="logo"/> {props.children.title}</a></li>
                : props.children.icon === undefined && props.children.text !== undefined 
                ?  <li><a href={props.children.href}>{props.children.title}</a><span>{props.children.text}</span></li>
                : <li><a href={props.children.href}>{props.children.title}</a></li>
    )
}
