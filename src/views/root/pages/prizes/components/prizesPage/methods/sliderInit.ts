import Slider from '@classes/slider/Slider.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const { needSlider } = this.state;

    if (!needSlider) {
        return;
    }

    const slider = this.parent.current!.querySelector('.prizesPage__slider') as HTMLElement;
    const sliderArea = slider.querySelector('.prizesPage__sliderInner') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: sliderArea,
        moveArea: this.parent.current!.querySelector('.prizesPage__sliderItems')!,
        itemClass: 'prizesPage__sliderItem',
        showEach: false,
        infinity: true,
        buttons: {
            prev: slider.querySelector('.prizesPage__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.prizesPage__sliderButton._next') as HTMLElement,
        },
        callback: ({ type }) => {
            if (type === 'move') {
                const sliderLeft = sliderArea.getBoundingClientRect().x + sliderArea.offsetWidth;

                slider.querySelectorAll('.prizesPage__sliderItem._withAlert').forEach((i) => {
                    const item = i as HTMLElement;
                    const itemLeft = item.getBoundingClientRect().x + item.offsetWidth;

                    item.removeAttribute('data-alertReverse');

                    if (itemLeft + 20 > sliderLeft) {
                        item.setAttribute('data-alertReverse', 'true');
                    }
                });
            }
        },
        notDragItems: ['.prizesPage__sliderItemDescriptionInfo'],
    });
};

export default sliderInit;
