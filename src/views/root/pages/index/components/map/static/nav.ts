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
    animationThumbs?: string[];
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
        animationThumbs: ['location-1_1.png', 'location-1_2.png', 'location-1_3.png'],
    },
    {
        thumbs: ['location-2.png'],
        title: 'Как<br/>участвовать',
        pageName: 'rules',
        goal: 'howToBtn',
        animationThumbs: ['location-2_1.png', 'location-2_2.png', 'location-2_3.png'],
    },
    {
        thumbs: ['location-3.png', 'location-3_1.png'],
        title: 'ПРИЗЫ',
        pageName: 'prizes',
        goal: 'prizesBtn',
        animationThumbs: ['location-3_2.png', 'location-3_3.png'],
    },
    {
        thumbs: ['location-4.png'],
        title: 'Личный<br/>кабинет',
        pageName: 'auth',
        goal: 'profileBtn, mapProfileBtn',
        animationThumbs: ['location-4_1.png', 'location-4_2.png', 'location-4_3.png'],
    },
    {
        thumbs: ['location-5.png'],
        title: 'Продукты-<br/>участники',
        pageName: 'products',
        goal: 'aboutBtn',
        animationThumbs: ['location-5_1.png'],
    },
    {
        thumbs: ['location-6.png'],
        title: 'Растим<br/>Добро',
        popup: 'dobroPopup',
        animationThumbs: ['location-6_1.png', 'location-6_2.png', 'location-6_3.png'],
    },
    {
        thumbs: ['location-7.png'],
        title: 'Снежки',
        support: 'Играй в снежки с жителями Лосьвилля',
        section: 'games',
        game: 'SNOWBALL',
        goal: 'mapGameSnowball',
        animationThumbs: ['location-7_1.png', 'location-7_2.png', 'location-7_3.png'],
    },
    {
        thumbs: ['location-8.png'],
        title: 'Тайный<br/>Лосянта',
        support: 'Угадай Тайного Лосянту',
        game: 'LOSYANTA',
        goal: 'mapGameElks',
        animationThumbs: ['location-8_1.png', 'location-8_2.png', 'location-8_3.png'],
    },
    {
        thumbs: ['location-9.png'],
        title: 'Вайб<br/>Лосьвилля',
        support: 'Успей собрать как можно больше предметов с вайбом Лосьвилля',
        game: 'VIBE',
        goal: 'mapGameVibe',
        animationThumbs: ['location-9_1.png', 'location-9_2.png', 'location-9_3.png'],
    },
    {
        thumbs: ['location-10.png'],
        title: 'Новогодняя<br/>ёлка',
        support: 'Помоги лосикам зажечь Новогоднюю елку',
        game: 'LIGHTUP',
        goal: 'mapGameTree',
        animationThumbs: ['location-10_1.png', 'location-10_2.png', 'location-10_3.png'],
    },
    {
        thumbs: ['location-11-1.png', 'location-11-2.png'],
        title: 'Пятёрочка',
        section: 'actions',
        pageName: '5ka',
        goal: 'mapPopup5ka',
        animationThumbs: ['location-11-1_1.png', 'location-11-1_2.png', 'location-11-1_3.png'],
    },
    {
        thumbs: ['location-12-1.png', 'location-12-2.png'],
        title: 'Лента',
        popup: 'lentaPopup',
        goal: 'mapPopupLenta',
        animationThumbs: ['location-12-1_1.png', 'location-12-1_2.png', 'location-12-1_3.png'],
    },
    {
        thumbs: ['location-13-1.png', 'location-13-2.png'],
        title: ['Магнит', 'дикси'],
        goal: 'mapPopupMagnit/mapPopupDixy',
        animationThumbs: ['location-13-1_1.png', 'location-13-1_2.png', 'location-13-1_3.png'],
    },
    {
        thumbs: ['location-14-1.png', 'location-14-2.png'],
        title: 'Перекрёсток',
        support: 'Старт акции с 01.12.25',
        goal: 'mapPopupPerek',
        animationThumbs: ['location-14-1_1.png', 'location-14-1_2.png', 'location-14-1_3.png'],
    },
    {
        thumbs: ['location-15-1.png', 'location-15-2.png'],
        title: 'Красное и белое',
        support: 'Старт акции с 20.11.25',
        popup: 'kbPopup',
        goal: 'mapPopupKB',
        animationThumbs: ['location-15-1_1.png', 'location-15-1_2.png', 'location-15-1_3.png'],
    },
    {
        thumbs: ['location-20-1.png'],
        title: 'Яндекс',
        support:
            'Скоро<br/>Выполняйте задания с 24.11 в Яндекс Лавке и с 02.12 в Яндекс Еде и выигрывайте призы от лосика Гурмана для создания уютной атмосферы в ожидании праздника!',
        goal: 'mapPopupYandex',
        animationThumbs: ['location-20-1_1.png', 'location-20-1_2.png', 'location-20-1_3.png'],
    },
    {
        thumbs: ['location-21-1.png'],
        title: 'Самокат',
        support: 'Старт акции с 03.12',
        goal: 'mapPopupSamokat',
        animationThumbs: ['location-21-1_1.png', 'location-21-1_2.png', 'location-21-1_3.png'],
    },
    {
        thumbs: ['location-24-1.png'],
        title: 'Додо пицца',
        support: 'Старт акции с 25.11.25',
        goal: 'mapPopupDodo',
        animationThumbs: ['location-24-1_1.png', 'location-24-1_2.png', 'location-24-1_3.png'],
    },
    {
        thumbs: ['location-25-1.png'],
        title: 'Каро',
        support: 'Старт акции с 15.12.25',
        goal: 'mapPopupKaro',
        animationThumbs: ['location-25-1_1.png', 'location-25-1_2.png', 'location-25-1_3.png'],
    },
];
