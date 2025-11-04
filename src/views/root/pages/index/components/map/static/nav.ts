import { PageNamesT, PopupsNamesT } from '@global/types';

import games from '../../../../../../../static/games';
import { mapSections } from './sections';

type MavNavItemT = {
    thumbs: string[];
    title: string | string[];
    pageName?: PageNamesT;
    game?: keyof typeof games;
    popup?: PopupsNamesT;
    support?: string;
    section?: keyof typeof mapSections;
    goal?: string | { name: string; isWin?: boolean };
};

export const mapNav: MavNavItemT[] = [
    {
        thumbs: ['location-1.png'],
        title: 'Регистрация<br/>Кода',
        pageName: 'regCode',
        goal: {
            name: 'regCodeBtn, mapRegCodeBtn',
            isWin: true,
        },
    },
    {
        thumbs: ['location-2.png'],
        title: 'Как<br/>участвовать',
        pageName: 'rules',
        goal: 'howToBtn',
    },
    {
        thumbs: ['location-3.png'],
        title: 'ПРИЗЫ',
        pageName: 'prizes',
        goal: 'prizesBtn',
    },
    {
        thumbs: ['location-4.png'],
        title: 'Личный<br/>кабинет',
        pageName: 'auth',
        goal: 'profileBtn, mapProfileBtn',
    },
    {
        thumbs: ['location-5.png'],
        title: 'Продукты-<br/>участники',
        pageName: 'products',
        goal: 'aboutBtn',
    },
    {
        thumbs: ['location-6.png'],
        title: 'Растим<br/>Добро',
        popup: 'dobroPopup',
    },
    {
        thumbs: ['location-7.png'],
        title: 'Снежки',
        support: 'Играй в снежки с жителями Лосьвилля',
        section: 'games',
        game: 'SNOWBALL',
        goal: 'mapGameSnowball',
    },
    {
        thumbs: ['location-8.png'],
        title: 'Тайный<br/>Лосянта',
        support: 'Угадай Тайного Лосянту',
        game: 'LOSYANTA',
        goal: 'mapGameElks',
    },
    {
        thumbs: ['location-9.png'],
        title: 'Вайб<br/>Лосьвилля',
        support: 'Успей собрать как можно больше предметов с вайбом Лосьвилля',
        game: 'VIBE',
        goal: 'mapGameVibe',
    },
    {
        thumbs: ['location-10.png'],
        title: 'Новогодняя<br/>ёлка',
        support: 'Помоги лосикам зажечь Новогоднюю елку',
        game: 'LIGHTUP',
        goal: 'mapGameTree',
    },
    {
        thumbs: ['location-11-1.png', 'location-11-2.png'],
        title: 'Пятёрочка',
        section: 'actions',
        pageName: '5ka',
        goal: 'mapPopup5ka',
    },
    {
        thumbs: ['location-12-1.png', 'location-12-2.png'],
        title: 'Лента',
        popup: 'lentaPopup',
        goal: 'mapPopupLenta',
    },
    {
        thumbs: ['location-13-1.png', 'location-13-2.png'],
        title: ['Магнит', 'дикси'],
        support: 'Старт акции с 19.11.25',
        goal: 'mapPopupMagnit/mapPopupDixy',
    },
    {
        thumbs: ['location-14-1.png', 'location-14-2.png'],
        title: 'Перекрёсток',
        support: 'Старт акции с 01.12.25',
        goal: 'mapPopupPerek',
    },
    {
        thumbs: ['location-15-1.png', 'location-15-2.png'],
        title: 'Красное и белое',
        support: 'Старт акции с 20.11.25',
        goal: 'mapPopupKB',
    },
    {
        thumbs: ['location-20-1.png'],
        title: 'Яндекс',
        support:
            'Скоро<br/>Выполняйте задания с 17.11 в Яндекс Лавке и с 02.12 в Яндекс Еде и выигрывайте призы от лосика Гурмана для создания уютной атмосферы в ожидании праздника!',
        goal: 'mapPopupYandex',
    },
    {
        thumbs: ['location-21-1.png'],
        title: 'Самокат',
        support: 'Старт акции с 01.12',
        goal: 'mapPopupSamokat',
    },
    {
        thumbs: ['location-24-1.png'],
        title: 'Додо пицца',
        support: 'Старт акции с 18.11.25',
        goal: 'mapPopupDodo',
    },
    {
        thumbs: ['location-25-1.png'],
        title: 'Каро',
        support: 'Старт акции с 15.12.25',
        goal: 'mapPopupKaro',
    },
    {
        thumbs: ['location-23-1.png'],
        title: 'Teboil',
        goal: 'mapPopupTeboil',
        // support: 'Старт акции с 01.12',
    },
];
