import changePage from '@functions/changePage.ts';
import getPage from '@functions/getPage.ts';
import scrollToBlock from '@functions/scrollToBlock.ts';
import { store } from '@redux/redux.ts';

import I, { NavItemT } from '../types.ts';

const getNav: I['getNav'] = function () {
    const nav: NavItemT[] = [];
    const { handler } = this.props;

    (['index', 'rules', 'prizes', 'winners', 'faq', 'products'] as const).forEach((name) => {
        let goal: NavItemT['goal'];

        if (name === 'index') {
            goal = 'menuMain';
        }

        if (name === 'rules') {
            goal = 'menuRules';
        }

        if (name === 'prizes') {
            goal = 'menuPrizes';
        }

        if (name === 'winners') {
            goal = 'menuWinners';
        }

        if (name === 'faq') {
            goal = 'menuFaq';
        }

        if (name === 'products') {
            goal = 'menuAbout';
        }

        nav.push({
            name,
            pageName: name,
            content: getPage({ name }).content,
            goal,
        });
    });

    nav.push({
        name: 'tg',
        content: 'Чат-бот',
        href: 'https://t.me/dobrycola_promo_bot',
        goal: 'menuChatbot',
    });

    nav.push({
        name: 'actions',
        content: 'Акции партнеров',
        goal: 'menuPartners',
        onClick: () => {
            const storePages = store.getState().pages;

            if (storePages.index.isShow) {
                const sectionItem = document.querySelector<HTMLElement>(
                    `[data-section="actions"]`,
                ) as HTMLElement;
                const scrollNode = this.parent
                    .current!.closest('.publicPage')
                    ?.querySelector('.publicPage__inner') as HTMLElement;

                if (sectionItem && scrollNode) {
                    scrollToBlock({
                        blockNode: sectionItem,
                        scrollNode,
                        duration: 300,
                    });
                }
            } else {
                changePage({ pageName: 'index', query: { ancor: 'actions' } });
            }

            handler(false);
        },
    });

    return nav;
};

export default getNav;
