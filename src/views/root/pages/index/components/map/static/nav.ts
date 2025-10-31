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
};

export const mapNav: MavNavItemT[] = [
    {
        thumbs: ['location-1.png'],
        title: 'Регистрация<br/>Кода',
        pageName: 'regCode',
    },
    {
        thumbs: ['location-2.png'],
        title: 'Как<br/>участвовать',
        pageName: 'rules',
    },
    {
        thumbs: ['location-3.png'],
        title: 'ПРИЗЫ',
        pageName: 'prizes',
    },
    {
        thumbs: ['location-4.png'],
        title: 'Личный<br/>кабинет',
        pageName: 'auth',
    },
    {
        thumbs: ['location-5.png'],
        title: 'Продукты-<br/>участники',
        pageName: 'products',
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
    },
    {
        thumbs: ['location-8.png'],
        title: 'Тайный<br/>Лосянта',
        support: 'Угадай Тайного Лосянту',
        game: 'LOSYANTA',
    },
    {
        thumbs: ['location-9.png'],
        title: 'Вайб<br/>Лосьвилля',
        support: 'Успей собрать как можно больше предметов с вайбом Лосьвилля',
        game: 'VIBE',
    },
    {
        thumbs: ['location-10.png'],
        title: 'Новогодняя<br/>ёлка',
        support: 'Помоги лосикам зажечь Новогоднюю елку',
        game: 'LIGHTUP',
    },
    {
        thumbs: ['location-11-1.png', 'location-11-2.png'],
        title: 'Пятёрочка',
        section: 'actions',
        pageName: '5ka',
    },
    {
        thumbs: ['location-12-1.png', 'location-12-2.png'],
        title: 'Лента',
        popup: 'lentaPopup',
    },
    {
        thumbs: ['location-13-1.png', 'location-13-2.png'],
        title: ['Магнит', 'дикси'],
        support: 'Старт акции с 19.11.25',
    },
    {
        thumbs: ['location-14-1.png', 'location-14-2.png'],
        title: 'Перекрёсток',
        support: 'Старт акции с 01.12.25',
    },
    {
        thumbs: ['location-15-1.png', 'location-15-2.png'],
        title: 'Красное и белое',
        support: 'Старт акции с 20.11.25',
    },
    {
        thumbs: ['location-20-1.png'],
        title: 'Яндекс',
        support:
            'Скоро<br/>Выполняйте задания с 17.11 в Яндекс Лавке и с 02.12 в Яндекс Еде и выигрывайте призы от лосика Гурмана для создания уютной атмосферы в ожидании праздника!',
    },
    {
        thumbs: ['location-21-1.png'],
        title: 'Самокат',
        support: 'Старт акции с 01.12',
    },
    {
        thumbs: ['location-24-1.png'],
        title: 'Додо пицца',
        support: 'Старт акции с 18.11.25',
    },
    {
        thumbs: ['location-25-1.png'],
        title: 'Каро',
        support: 'Старт акции с 15.12.25',
    },
    {
        thumbs: ['location-23-1.png'],
        title: 'Teboil',
        // support: 'Старт акции с 01.12',
    },
];
