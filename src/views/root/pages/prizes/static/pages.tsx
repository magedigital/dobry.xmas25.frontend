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
                        buttonText="Участвовать"
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
                        description="Для участия в розыгрыше на твоём счету должно быть более <span>10</span> баллов"
                        metaTitle="Призы - Еженедельно"
                        buttonText="Зарегистрировать код"
                        buttonOnClick={() => {
                            changePage({ pageName: 'regCode' });
                        }}
                        items={content!.components.prizes.weekly.items}
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
