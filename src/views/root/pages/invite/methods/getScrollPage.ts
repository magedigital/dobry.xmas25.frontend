import I from '../types.ts';

const getScrollPage: I['getScrollPage'] = function () {
    const parentNode = this.parent.current;

    if (!parentNode) {
        return;
    }

    return parentNode
        .querySelector('.body__page[data-show]')
        ?.querySelector('.popup') as HTMLElement;
};

export default getScrollPage;
