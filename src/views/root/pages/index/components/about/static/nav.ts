import { PageNamesT } from '@global/types';

const nav = [
    {
        name: 'code',
        title: 'Регистрация<br/>кода',
        image: 'location1.svg',
        pageName: 'regCode',
        goal: 'regCodeBtn, mapRegCodeBtn',
    },
    {
        name: 'instruction',
        title: 'Как участвовать',
        image: 'location2.svg',
        pageName: 'rules',
        goal: 'howToBtn',
    },
    {
        name: 'lk',
        title: 'Личный кабинет',
        image: 'location3.svg',
        pageName: 'profile',
        goal: 'profileBtn,mapProfileBtn',
    },
    {
        name: 'prizes',
        title: 'Призы',
        image: 'location4.svg',
        pageName: 'prizes',
        goal: 'prizesBtn',
    },
    {
        name: 'vip',
        title: 'вип-шатер<br/>«ПЯТЁРОЧКА»',
        image: 'location6.svg',
        goal: 'vipBtn,mapVipBtn',
    },
    {
        name: 'products',
        title: 'Продукты-<br/>Участники',
        image: 'location5.svg',
        pageName: 'products',
        goal: 'aboutBtn',
    },
    {
        name: 'winners',
        title: 'Победители',
        image: 'location8.svg',
        pageName: 'winners',
        goal: 'winnersBtn',
    },
    {
        name: 'faq',
        title: 'Вопрос-ответ',
        image: 'location7.svg',
        pageName: 'faq',
        goal: 'faqBtn',
    },
] as const;

type NavItemT = {
    name: string;
    title: string;
    image: string;
    goal: string;
    pageName?: PageNamesT;
};

export default nav;
export type { NavItemT };
