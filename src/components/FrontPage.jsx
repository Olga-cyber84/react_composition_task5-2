import React, {useState} from 'react'
import HeaderBlock from './HeaderBlock';
import logo from '.././logo.svg';
import icon from '../img/icon.png';
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
            icon: icon,
            title: "Новость 1",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 2",
            href: "/#"
        },
        {
            icon: icon,
            title: "Новость 3",
            href: "/#"
        },
        {
            icon: icon,
            title: "Новость 4",
            href: "/#"
        },
        {
            icon: icon,
            title: "Новость 5",
            href: "/#"
        }
    ];
    const inPlace = [
        {
            icon: icon,
            title: "Новость 1 из региона",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 2 из региона",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 3 из региона",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 4 из региона",
            href: "/#"
        },
        {
            icon: icon.png,
            title: "Новость 5 из региона",
            href: "/#"
        }
    ];
    const recommends = [
        {
            icon: logo,
            title: "Новость 1 рекомендованная",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 2 рекомендованная",
            href: "/#"
        },
        {
            icon: logo,
            title: "Новость 3 рекомендованная",
            href: "/#"
        },
        {
            icon: icon,
            title: "Новость 4 рекомендованная",
            href: "/#"
        },
        {
            icon: icon,
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
