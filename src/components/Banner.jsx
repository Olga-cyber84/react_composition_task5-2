import React from 'react'

export default function Banner(props) {
    //отвечает за вывод определенного баннера 
    return (
        <div style={{width: "80%", height: "50px", border: "solid gray"}}>
            <a href="/#"><img src={props.banner.source} alt="big banner"/></a>
        </div>
    )
}
