const games = {
    VIBE: {
        image: 'game/Game1.svg',
        title: 'Лови вайб',
        description: 'Успей собрать как можно больше фестивальных предметов',
        goal: 'vibeBtn',
        metaTitle: 'Лови вайб',
    },
    SPOTLIGHTS: {
        image: 'game/Game2.svg',
        title: 'В свете софитов',
        description: 'Поймай звезду в луч прожектора',
        goal: 'spotlightsBtn',
        metaTitle: 'В свете софитов',
    },
    MATCH: {
        image: 'game/Game4.svg',
        title: 'Найди мэтч',
        description: 'Собери музыкально-фестивальные пары этого лета',
        goal: 'matchBtn',
        metaTitle: 'Найди мэтч',
    },
    STAGE: {
        image: 'game/Game3.svg',
        title: 'Вперед к сцене',
        description: 'Доберись до Главной сцены Добрый Fest',
        goal: 'stageBtn',
        metaTitle: 'Вперёд к сцене',
    },
    FIVE: {
        image: 'location-game-01.svg',
        title: 'Играть',
        description: 'Успей собрать как можно больше фестивальных предметов',
        goal: '',
        metaTitle: 'VIP-шатёр',
    },
} as const;

export default games;
