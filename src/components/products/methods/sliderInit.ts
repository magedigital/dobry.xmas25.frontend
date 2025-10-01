import Slider from '@classes/slider/Slider.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = function () {
    const slider = this.parent.current!.querySelector('.products__slider') as HTMLElement;

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.products__sliderInner')!,
        moveArea: this.parent.current!.querySelector('.products__sliderItems')!,
        reactMoveArea: this.parent.current!.querySelector(
            '.products__sliderReactItems',
        )! as HTMLElement,
        itemClass: 'products__sliderItemsItem',
        // showEach: true,
        infinity: true,
        isReactInfinity: true,
        callback: async ({ currentKey, items, reactSetCb }) => {
            if (typeof currentKey === 'number') {
                await setAsyncState.call(this, { current: currentKey });
            }

            if (items) {
                const resultProducts = items.map((item) => {
                    const product = this.getProducts()[item.key];

                    return {
                        ...product,
                        isCurrent: item.isCurrent,
                        id: item.id,
                    };
                });

                await this.setProducts(resultProducts);

                if (reactSetCb) {
                    reactSetCb();
                }
            }
        },
        buttons: {
            prev: slider.querySelector('.products__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.products__sliderButton._next') as HTMLElement,
        },
        notDragItems: ['.product__button'],
    });
};

export default sliderInit;
