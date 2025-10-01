import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current! as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.index5kaPrizes__prizesSliderInner')!,
        moveArea: this.parent.current!.querySelector('.index5kaPrizes__prizesSliderItems')!,
        itemClass: 'index5kaPrizes__prizesSliderItem',
        showEach: false,
        infinity: true,
        buttons: {
            prev: slider.querySelector('.index5kaPrizes__prizesSliderButton._prev') as HTMLElement,
            next: slider.querySelector('.index5kaPrizes__prizesSliderButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
