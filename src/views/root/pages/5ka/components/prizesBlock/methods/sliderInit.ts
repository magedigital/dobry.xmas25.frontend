import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current as HTMLElement;

    if (!this.needSlider) {
        return;
    }

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.p5kaPrizesBlock__slider')!,
        moveArea: this.parent.current!.querySelector('.p5kaPrizesBlock__sliderItems')!,
        itemClass: 'p5kaPrizesBlock__sliderItem',
        infinity: true,
        withDrag: true,
        buttons: {
            prev: slider.querySelector('.p5kaPrizesBlock__sliderArrow._prev') as HTMLElement,
            next: slider.querySelector('.p5kaPrizesBlock__sliderArrow._next') as HTMLElement,
        },
    });
};

export default sliderInit;
