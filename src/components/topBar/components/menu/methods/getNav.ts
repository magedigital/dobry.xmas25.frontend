import getPage from '@functions/getPage.ts';

import I, { NavItemT } from '../types.ts';

const getNav: I['getNav'] = function () {
    const nav: NavItemT[] = [];

    (['index', 'rules', 'prizes', 'winners', 'faq', 'products', 'cheque'] as const).forEach(
        (name) => {
            nav.push({
                name,
                pageName: name,
                content: getPage({ name }).content,
            });
        },
    );

    nav.push({
        name: 'tg',
        content: 'Телеграм-бот',
        href: 'https://t.me/dobrycola_promo_bot',
    });

    return nav;
};

export default getNav;
