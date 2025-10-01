import setAnimate from '@functions/setAnimate.ts';
import { PagesT } from '@global/types.ts';
import pages from '@redux/pages.ts';

import I from '../types.ts';

const scrollToTab: I['scrollToTab'] = function (force) {
    const { storePages } = this.props;
    const prizesCurrentPage = pages
        .filter((page) => (page as PagesT).parentName === 'prizes')
        .find((page) => storePages[page.name].isShow)?.name;

    if (!prizesCurrentPage) {
        return;
    }

    const tabsScrollNode = this.parent.current!.querySelector(
        '.profile__pagesTabsWrapper',
    ) as HTMLElement;
    const tabNode = this.parent.current!.querySelector(
        `.profile__pagesTabWrapper[data-id="${prizesCurrentPage}"]`,
    ) as HTMLElement;

    if (!tabNode) {
        return;
    }

    const startScroll = tabsScrollNode.scrollLeft;
    const tabLeft = tabNode.getBoundingClientRect().x - tabsScrollNode.getBoundingClientRect().x;
    const tabResultPos = tabsScrollNode.offsetWidth / 2 - tabNode.offsetWidth / 2 - tabLeft;

    if (force) {
        tabsScrollNode.scrollLeft = startScroll - tabResultPos;

        return;
    }

    setAnimate({
        duration: 300,
        draw: (progress) => {
            tabsScrollNode.scrollLeft = startScroll - progress * tabResultPos;
        },
    });
};

export default scrollToTab;
