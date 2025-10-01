import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const { sliderCallback } = this.props;
    const slider = this.parent.current!.querySelector('.profileRaffle__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.profileRaffle__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.profileRaffle__sliderItems')!,
        itemClass: 'profileRaffle__sliderItem',
        showEach: true,
        infinity: true,
        callback: async ({ currentKey }) => {
            if (typeof currentKey === 'number') {
                sliderCallback(currentKey);
            }
        },
        buttons: {
            prev: slider.querySelector('.profileRaffle__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.profileRaffle__sliderButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
