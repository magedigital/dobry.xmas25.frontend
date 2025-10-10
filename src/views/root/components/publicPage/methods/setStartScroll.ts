import I from '../types.ts';

const setStartScroll: I['setStartScroll'] = function () {
    const localName = this.getLocalScrollName();
    let scroll = 0;

    const localScroll = localStorage.getItem(localName);

    if (localScroll && !Number.isNaN(+localScroll)) {
        scroll = +localScroll;
    }

    if (!this.scrollNode.current) {
        return;
    }

    this.scrollNode.current.scrollTop = scroll;

    this.scrollHandler();
};

export default setStartScroll;
