import React from 'react';

import changePage from '@functions/changePage.ts';

import PrizesPage from '../components/prizesPage/PrizesPage.tsx';

import RootI from '../types.ts';

import MainPrize from '../pages/mainPrize/MainPrize.tsx';

const pages = {
    'prizes-moment': {
        title: 'МОМЕНТАЛЬНЫЙ РОЗЫГРЫШ',
        render(this: RootI) {
            const { content } = this.state;

            return (
                <>
                    <PrizesPage
                        name="moment"
                        title="Выиграй сразу"
                        metaTitle="Призы - Моментальный розыгрыш"
                        description="Участие в розыгрыше - <span>1</span> балл"
                        buttonText="ИГРАТЬ"
                        buttonOnClick={() => {
                            changePage({ pageName: 'raffle' });
                        }}
                        items={content!.components.prizes.instant.items}
                    />
                </>
            );
        },
    },
    'prizes-balls': {
        title: 'КОПИ БАЛЛЫ',
        render(this: RootI) {
            const { content } = this.state;

            return (
                <>
                    <PrizesPage
                        name="merch"
                        title={`Копи баллы и обменивай на\xa0призы`}
                        metaTitle="Призы - Копи баллы"
                        description="Регистрируй коды и получай <br class='_MOBILE' />по <span>1</span> баллу за каждый код, приводи друзей - зарабатывай еще баллы"
                        buttonText="Зарегистрировать код"
                        buttonOnClick={() => {
                            changePage({ pageName: 'regCode' });
                        }}
                        items={content!.components.prizes.merch.items}
                        // items={[
                        //     {
                        //         title: '100 баллов Яндекс Плюс',
                        //         balls: '5 баллов',
                        //         image: 'prize-2-43.png',
                        //     },
                        //     {
                        //         title: 'ЯРКИЕ НОСКИ с\xa0Fest фразами',
                        //         balls: '7 баллов',
                        //         image: 'prize-2-11.png',
                        //     },
                        //     {
                        //         title: 'КАСТОМНЫЕ ФУТБОЛКИ с\xa0твоим Fest-именем',
                        //         balls: '15 баллов',
                        //         image: 'prize-2-31.png',
                        //     },
                        //     {
                        //         title: 'СТИЛЬНЫЕ ЗИПКИ с\xa0Fest фразами',
                        //         balls: '20 баллов',
                        //         image: 'prize-2-21.png',
                        //     },
                        // ]}
                    />
                </>
            );
        },
    },
    'prizes-week': {
        title: 'ЕЖЕНЕДЕЛЬНО',
        render(this: RootI) {
            const { content } = this.state;

            return (
                <>
                    <PrizesPage
                        name="weekly"
                        title="Еженедельный розыгрыш"
                        metaTitle="Призы - Еженедельно"
                        buttonText="Зарегистрировать код"
                        buttonOnClick={() => {
                            changePage({ pageName: 'regCode' });
                        }}
                        items={content!.components.prizes.weekly.items}
                        // items={[
                        //     {
                        //         title: 'Мощный powerbank с\xa0подсветкой',
                        //         info: 'Участие в розыгрыше – <span>10</span> баллов',
                        //         image: 'prize-3-01.png',
                        //     },
                        //     {
                        //         title: 'iPhone 16 c\xa0кастом шнурком',
                        //         info: 'Участие в розыгрыше – <span>10</span> баллов',
                        //         image: 'prize-3-02.png',
                        //     },
                        //     {
                        //         title: 'Специальный приз от FEDUK',
                        //         info: 'Розыгрыш среди чеков с\xa0новинками',
                        //         image: 'prize-3-03.png',
                        //     },
                        //     {
                        //         title: 'Сертификат на\xa0музыкальный фестиваль',
                        //         info: 'Розыгрыш в\xa0игровых шатрах',
                        //         image: 'prize-3-04.png',
                        //     },
                        // ]}
                    />
                </>
            );
        },
    },
    'prizes-main': {
        title: 'ГЛАВНЫЙ ПРИЗ',
        render(this: RootI) {
            return (
                <>
                    <MainPrize />
                </>
            );
        },
    },
} as const;

export default pages;
