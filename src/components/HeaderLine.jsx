import React from 'react'

export default function HeaderLine({source, children}) {
    //отвечает за отображение заголовков
    return (
        <div className={source.className}>
            <a href={source.source}>{children}</a>
        </div>
    )
}
