import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current!.querySelector('.indexHeader__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.indexHeader__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.indexHeader__sliderItems')!,
        itemClass: 'indexHeader__sliderItem',
        showEach: true,
        infinity: true,
        withDrag: false,
        callback: ({ current }) => {
            if (typeof current === 'number') {
                const itemNode = this.parent.current!.querySelector(
                    `.indexHeader__sliderItem[data-id="${current}"]`,
                ) as HTMLElement;

                this.parent
                    .current!.querySelectorAll('.indexHeader__sliderItem[data-vis]')
                    .forEach((n) => {
                        n.removeAttribute('data-vis');
                    });
                this.parent
                    .current!.querySelectorAll('.indexHeader__sliderItem[data-cur]')
                    .forEach((n) => {
                        n.removeAttribute('data-cur');
                    });

                if (itemNode) {
                    const nextItemNode = itemNode.nextSibling as HTMLElement;

                    itemNode.setAttribute('data-vis', 'true');

                    if (nextItemNode) {
                        nextItemNode.setAttribute('data-cur', 'true');

                        const nextItemNode2 = nextItemNode.nextSibling as HTMLElement;

                        if (nextItemNode2) {
                            nextItemNode2.setAttribute('data-vis', 'true');
                        }
                    }
                }
            }
        },
    });
    this.setSliderTimer();
};

export default sliderInit;
