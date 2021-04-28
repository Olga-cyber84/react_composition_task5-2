import React, {useState} from 'react'
import HeaderBlock from './HeaderBlock';
import logo from '.././logo.svg';
import RightBlock from './RightBlock';
import MainNews from './MainNews';
import Services from './Services';
import Search from './Search';
import Banner from './Banner';
import Weather from './Weather';
import RegionMap from './RegionMap';
import Visiting from './Visiting';
import Ether from './Ether';
import TvProgramm from './TvProgramm';

export default function FrontPage() {
    //компонент главной страницы, содержит компоненты, отвечающие за отображение ее структурных блоков, хранит состояние
    const nowNews = [
        {
            icon: "https://sun9-15.userapi.com/impg/mieShYW_QbFY7KLwMORSWWWfamqHVgtOa_s1cQ/PXRuFDdsle4.jpg?size=500x500&quality=96&sign=89cc9228975598d57934710a4c0a0bf0&type=album",
            title: "Новость 1",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 2",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 3",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 4",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 5",
            href: "/#"
        }
    ];
    const inPlace = [
        {
            icon: "https://sun9-15.userapi.com/impg/mieShYW_QbFY7KLwMORSWWWfamqHVgtOa_s1cQ/PXRuFDdsle4.jpg?size=500x500&quality=96&sign=89cc9228975598d57934710a4c0a0bf0&type=album",
            title: "Новость 1 из региона",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 2 из региона",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 3 из региона",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 4 из региона",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 5 из региона",
            href: "/#"
        }
    ];
    const recommends = [
        {
            icon: "https://sun9-15.userapi.com/impg/mieShYW_QbFY7KLwMORSWWWfamqHVgtOa_s1cQ/PXRuFDdsle4.jpg?size=500x500&quality=96&sign=89cc9228975598d57934710a4c0a0bf0&type=album",
            title: "Новость 1 рекомендованная",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 2 рекомендованная",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 3 рекомендованная",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 4 рекомендованная",
            href: "/#"
        },
        {
            icon: './img/icon.png',
            title: "Новость 5 рекомендованная",
            href: "/#"
        }
    ];
    const [chosenNews, setNews] = useState(nowNews);
    const allNews = {
        nowNews: nowNews,
        inPlace: inPlace,
        recommends: recommends
    }

    const handleSelectSource = (id) => {
        setNews(()=> allNews[id])
    }
    const rightBlockData = [{
        icon: logo,
        title: "Работа над ошибками",
        href: "/#",
        text: "Смотрите ни Яндексе и запоминайте"
    }]
    const services = [
        {
            title: "Видео",
            href: "/#"
        },
        {
            title: "Картинки",
            href: "/#"
        },
        {
            title: "Новости",
            href: "/#"
        },
        {
            title: "Карты",
            href: "/#"
        },
        {
            title: "Переводчик",
            href: "/#"
        },
        {
            title: "Эфир",
            href: "/#"
        },
        {
            title: "еще",
            href: "/#"
        }
    ];
    const banner = {
        source: {logo}
    }
    const weather = {
        temp_now: "+17",
        day_temp: "Утром +17, днём +20"
    }
    
  return (
    <>
      <HeaderBlock onSelectSource={handleSelectSource} />
      <MainNews chosenNews={chosenNews}/>
      <RightBlock rightBlockData={rightBlockData}/>
      <Services services={services} />
      <Search />
      <Banner banner={banner}/>
      <Weather weather={weather}/>
      <Visiting />
      <RegionMap />
      <TvProgramm />
      <Ether />
    </>
  );
}
