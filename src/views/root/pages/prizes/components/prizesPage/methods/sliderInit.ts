import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current!.querySelector('.prizesPage__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.prizesPage__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.prizesPage__sliderItems')!,
        itemClass: 'prizesPage__sliderItem',
        showEach: false,
        infinity: true,
        buttons: {
            prev: slider.querySelector('.prizesPage__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.prizesPage__sliderButton._next') as HTMLElement,
        },
        callback: () => {
            // const fedukPrizeNodes = this.parent.current!.querySelectorAll<HTMLElement>(
            //     '.prizesPage__sliderItem._feduk',
            // );
            // if (name === 'weekly') {
            //     fedukPrizeNodes.forEach((n) => {
            //         n.onclick = () => {
            //             changePage({ pageName: 'fedukPrize' });
            //         };
            //     });
            // }
        },
    });
};

export default sliderInit;
