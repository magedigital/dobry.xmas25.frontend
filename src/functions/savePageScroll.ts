const setPageScroll = (target: HTMLElement, id: string): void => {
    const localKey = `scrollPage-${id}`;

    localStorage.setItem(localKey, target.scrollTop.toString());
};

const deletePageScroll = (id: string): void => {
    const localKey = `scrollPage-${id}`;

    localStorage.removeItem(localKey);
};

const scrollPage = (page: HTMLElement, id: string): void => {
    const localKey = `scrollPage-${id}`;
    const scrollTop = localStorage.getItem(localKey);

    if (scrollTop && !Number.isNaN(+scrollTop)) {
        page.scrollTop = +scrollTop;
    }
};

const getPageScroll = (id: string): number | undefined => {
    const localKey = `scrollPage-${id}`;
    const scrollTop = localStorage.getItem(localKey);

    return typeof scrollTop === 'string' ? +scrollTop : undefined;
};

export { setPageScroll, getPageScroll, scrollPage, deletePageScroll };
