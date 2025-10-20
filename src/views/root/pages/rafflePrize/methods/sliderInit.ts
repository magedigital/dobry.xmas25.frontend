import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current!.querySelector('.rafflePrize__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.rafflePrize__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.rafflePrize__sliderItems')!,
        itemClass: 'rafflePrize__sliderItem',
        showEach: true,
        infinity: true,
        withDrag: false,
        callback: ({ current }) => {
            if (typeof current === 'number') {
                const itemNode = this.parent.current!.querySelector(
                    `.rafflePrize__sliderItem[data-id="${current}"]`,
                ) as HTMLElement;

                this.parent
                    .current!.querySelectorAll('.rafflePrize__sliderItem[data-cur]')
                    .forEach((n) => {
                        n.removeAttribute('data-cur');
                    });

                if (itemNode) {
                    const nextItem = itemNode.nextElementSibling;
                    const curItem = nextItem?.nextElementSibling;

                    if (curItem) {
                        curItem.setAttribute('data-cur', 'true');
                    }
                }
            }
        },
    });
};

export default sliderInit;
