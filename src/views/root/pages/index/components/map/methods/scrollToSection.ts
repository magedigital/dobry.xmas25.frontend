import scrollToBlock from '@functions/scrollToBlock.ts';

import I from '../types.ts';

const scrollToSection: I['scrollToSection'] = function (section) {
    const { getScrollNode } = this.props;
    const scrollNode = getScrollNode();

    if (!scrollNode) {
        return;
    }

    let currentNode = this.parent.current as HTMLElement;
    const sectionItem = this.parent.current!.querySelector<HTMLElement>(
        `.indexMap__navItem[data-section="${section}"]`,
    );

    if (sectionItem) {
        currentNode = sectionItem;
    }

    if (currentNode) {
        scrollToBlock({
            blockNode: currentNode,
            scrollNode,
            duration: 300,
        });
    }
};

export default scrollToSection;
