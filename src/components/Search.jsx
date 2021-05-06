import React from 'react';
import yandex from '../img/yandex.png';

export default function Search() {
    //отвечает за ввод фразы для поиски и запуск поиска
    return (
        <form>
            <img src={yandex} alt="логотип Яндекса" className="yandex-logo"/>
            <input type="search"/>
            <button>Найти</button>
            <div>Найтётся всё. Например, <span>фаза луны сегодня</span></div>
        </form>   
    )
}
