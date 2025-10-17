import I from '../types.ts';

const setClosePosition: I['setClosePosition'] = function () {
    if (!this.innerClassName || !this.parent.current) {
        return;
    }

    const closeNode = this.parent.current!.querySelector('.innerPage__close') as HTMLElement;

    if (closeNode) {
        const innerNode = this.parent.current!.querySelector(
            `.${this.innerClassName}`,
        ) as HTMLElement;

        if (innerNode) {
            const innerWidth = innerNode.offsetWidth;

            closeNode.style.marginLeft = `${innerWidth / 2 + closeNode.offsetWidth}px`;
        }
    }

    if (!this.getScrollPage) {
        return;
    }

    const scrollPage = this.getScrollPage();
    const topBarNode = document.querySelector('.topBar__head') as HTMLElement;

    if (!scrollPage || !topBarNode) {
        return;
    }

    const { scrollTop } = scrollPage;

    if (scrollTop > 0 && !this.isTopBarFix) {
        this.isTopBarFix = true;

        this.setState({ isTopBarFix: true });
    }

    if (scrollTop === 0 && this.isTopBarFix) {
        this.isTopBarFix = false;

        this.setState({ isTopBarFix: false });
    }

    const stopValue = topBarNode.offsetHeight - 20;

    if (scrollPage.scrollTop > stopValue && !this.state.showClose) {
        this.setState({ showClose: true });
    }

    if (scrollPage.scrollTop <= stopValue && this.state.showClose) {
        this.setState({ showClose: false });
    }
};

export default setClosePosition;
