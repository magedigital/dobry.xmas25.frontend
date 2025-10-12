import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const scrollHandler: I['scrollHandler'] = async function () {
    const { getScrollNode } = this.props;
    const scrollNode = getScrollNode();

    if (!scrollNode) {
        return;
    }

    let currentSection: I['state']['currentSection'] = 'main';

    (Object.keys(this.sections) as (keyof typeof this.sections)[]).forEach((section) => {
        const sectionItem = this.parent.current!.querySelector<HTMLElement>(
            `[data-section="${section}"]`,
        );

        if (sectionItem) {
            const itemTop = sectionItem.getBoundingClientRect().y;
            const itemHeight = sectionItem.offsetHeight;

            if (itemTop + itemHeight / 2 <= document.documentElement.clientHeight / 2) {
                currentSection = section;
            }
        }
    });

    if (this.currentSection !== currentSection) {
        this.currentSection = currentSection;

        await setAsyncState.call(this, { currentSection });
    }
};

export default scrollHandler;
