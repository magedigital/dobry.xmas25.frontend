import { PageNamesT } from '@global/types';

const games = {
    SNOWBALL: {
        menuThumb: 'game-img-1.jpg',
        image: 'game/Game1.svg',
        title: 'Снежки',
        description: 'Успей собрать как можно больше фестивальных предметов',
        goal: 'menuShowballl',
        metaTitle: 'Лови вайб',
    },
    VIBE: {
        menuThumb: 'game-img-2.jpg',
        image: 'game/Game2.svg',
        title: 'Вайб Лосьвилля',
        description: 'Поймай звезду в луч прожектора',
        goal: 'menuVibe',
        metaTitle: 'В свете софитов',
    },
    LIGHTUP: {
        menuThumb: 'game-img-3.jpg',
        image: 'game/Game4.svg',
        title: 'Новогодняя ёлка',
        description: 'Собери музыкально-фестивальные пары этого лета',
        goal: 'menuTree',
        metaTitle: 'Найди мэтч',
    },
    LOSYANTA: {
        menuThumb: 'game-img-4.jpg',
        image: 'game/Game3.svg',
        title: 'Тайный Лосянта',
        description: 'Доберись до Главной сцены Добрый Fest',
        goal: 'menuElks',
        metaTitle: 'Вперёд к сцене',
    },
} as const;

type GameT = {
    menuThumb: string;
    image: string;
    title: string;
    description: string;
    goal: string;
    metaTitle: string;
    pageName?: PageNamesT;
};

export default games;
export type { GameT };
