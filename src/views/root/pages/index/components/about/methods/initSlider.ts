import Slider from '@classes/slider/Slider.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const initSlider: I['initSlider'] = async function () {
    const { content } = this.props;

    if (this.prizesSlider || !content) {
        return;
    }

    const slider = this.parent.current!.querySelector('.indexAbout__mapMainPrizes') as HTMLElement;

    this.prizesSlider = new Slider({
        slider,
        area: slider.querySelector('.indexAbout__mapMainPrizesInner')!,
        moveArea: this.parent.current!.querySelector('.indexAbout__mapMainPrizesItems')!,
        itemClass: 'indexAbout__mapMainPrizesItem',
        showEach: true,
        infinity: true,
        callback: async ({ type, current }) => {
            if (type === 'startDrag') {
                await setAsyncState.call(this, { isDrag: true });
            }

            if (type === 'endDrag') {
                await setAsyncState.call(this, { isDrag: false });
            }

            if (type === 'startMove' || type === 'init') {
                slider
                    .querySelectorAll<HTMLElement>('.indexAbout__mapMainPrizesItem')
                    .forEach((item) => {
                        item.removeAttribute('data-prev');
                        item.removeAttribute('data-current');
                        item.removeAttribute('data-next');
                    });

                const currentItemNode = slider.querySelector(
                    `.indexAbout__mapMainPrizesItem[data-id="${current}"]`,
                ) as HTMLElement;

                if (currentItemNode) {
                    currentItemNode.setAttribute('data-prev', '');

                    const currentNextItemNode = currentItemNode.nextSibling as HTMLElement;

                    if (currentNextItemNode) {
                        currentNextItemNode.setAttribute('data-current', '');

                        const currentNextNextItemNode =
                            currentNextItemNode.nextSibling as HTMLElement;

                        if (currentNextNextItemNode) {
                            currentNextNextItemNode.setAttribute('data-next', '');
                        }
                    }
                }
            }
        },
        buttons: {
            prev: slider.querySelector('.indexAbout__mapMainPrizesButton._prev') as HTMLElement,
            next: slider.querySelector('.indexAbout__mapMainPrizesButton._next') as HTMLElement,
        },
    });
};

export default initSlider;
