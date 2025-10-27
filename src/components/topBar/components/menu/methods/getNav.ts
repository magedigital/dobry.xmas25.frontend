import changePage from '@functions/changePage.ts';
import getPage from '@functions/getPage.ts';
import scrollToBlock from '@functions/scrollToBlock.ts';
import { store } from '@redux/redux.ts';

import I, { NavItemT } from '../types.ts';

const getNav: I['getNav'] = function () {
    const nav: NavItemT[] = [];
    const { handler } = this.props;

    (['index', 'rules', 'prizes', 'winners', 'faq', 'products'] as const).forEach((name) => {
        nav.push({
            name,
            pageName: name,
            content: getPage({ name }).content,
        });
    });

    nav.push({
        name: 'tg',
        content: 'Чат-бот',
        href: 'https://t.me/dobrycola_promo_bot',
    });

    nav.push({
        name: 'actions',
        content: 'Акции партнеров',
        onClick: () => {
            const storePages = store.getState().pages;

            if (storePages.index.isShow) {
                const sectionItem = document.querySelector<HTMLElement>(
                    `[data-section="actions"]`,
                ) as HTMLElement;
                const scrollNode = this.parent
                    .current!.closest('.publicPage')
                    ?.querySelector('.publicPage__inner') as HTMLElement;

                console.log(sectionItem, scrollNode);

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
