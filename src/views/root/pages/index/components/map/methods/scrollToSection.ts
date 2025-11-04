import scrollToBlock from '@functions/scrollToBlock.ts';
import sendGoal from '@functions/sendGoal.ts';
import { store } from '@redux/redux.ts';

import I from '../types.ts';

const scrollToSection: I['scrollToSection'] = function (section, dur = 300) {
    const { getScrollNode } = this.props;
    const scrollNode = getScrollNode();

    if (!scrollNode) {
        return;
    }

    let currentNode = this.parent.current as HTMLElement;
    const sectionItem = this.parent.current!.querySelector<HTMLElement>(
        `[data-section="${section}"]`,
    );

    if (sectionItem) {
        currentNode = sectionItem;
    }

    if (currentNode) {
        scrollToBlock({
            blockNode: currentNode,
            scrollNode,
            duration: dur,
            offset: store.getState().device === 'desktop' ? -250 : -200,
            dir: 'top',
        });
    }

    if (section === 'games') {
        sendGoal('mapGameTab');
    }
};

export default scrollToSection;
