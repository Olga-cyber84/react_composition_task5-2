import React from 'react';


export default function ListItem(props) {
    //компонент элементов списка, показывает разные варианты списка в зависимости от переданных в props данных: иконка, заголовок с ссылкой, текст-описание
    const {href, title, icon, text} = props;
    return (
        <li>
            <a href={href}>
                {icon && <img src={icon} alt="logo"/>}
                {title}
            </a>
            {text && <span>{text}</span>}
        </li>
    )
}
