import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current!.querySelector('.product__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.product__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.product__sliderItems')!,
        itemClass: 'product__sliderItem',
        showEach: true,
        infinity: true,
        withDrag: false,
        buttons: {
            prev: slider.querySelector('.product__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.product__sliderButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
