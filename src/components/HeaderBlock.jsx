import React from 'react'

export default function HeaderBlock(props) {
    //отвечает за выбор ТОП-5 новостей для показа из 3-х возможных вариантов

    const handleChange = (e) => {
        props.onSelectSource(e.target.id);
    }
    return (
        <>
            <div className="header-block">
                <a href="/#" id="nowNews" onClick={handleChange}>Сейчас в СМИ</a>
                <a href="/#" id="inPlace" onClick={handleChange}>В Германии</a>
                <a href="/#" id="recommends" onClick={handleChange}>Рекомендуем</a>
                <span>Дата и время</span>
            </div>
        </>
    )
}
