import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = async function () {
    const { items } = this.state;
    const { customCallback, merch } = this.props;
    const slider = this.parent.current!.querySelector('.merch__slider') as HTMLElement;

    if (this.slider) {
        this.slider.destroy();
    }

    if (items.length <= 1) {
        return;
    }

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.merch__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.merch__sliderItems')!,
        itemClass: 'merch__sliderItem',
        showEach: true,
        infinity: false,
        callback: ({ current }) => {
            if (merch.custom === '1' && typeof current === 'number') {
                const item = items[current];

                customCallback(item);
            }
        },
        buttons: {
            prev: slider.querySelector('.merch__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.merch__sliderButton._next') as HTMLElement,
        },
    });
};

export default sliderInit;
