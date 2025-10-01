import Slider from '@classes/slider/Slider.ts';
import setAsyncState from '@functions/setAsyncState.ts';
import { store } from '@redux/redux.ts';

import I from '../types.ts';

const sliderInit: I['sliderInit'] = async function () {
    const { currentMerchIndex } = this.state;
    const slider = this.parent.current!.querySelector('.popup__merch') as HTMLElement;

    if (this.slider) {
        this.slider.destroy();
    }

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.popup__merchInner')!,
        moveArea: this.parent.current!.querySelector('.popup__merchItems')!,
        itemClass: 'popup__merchItem',
        showEach: true,
        infinity: false,
        withDrag: store.getState().device === 'mobile',
        current: currentMerchIndex,
        callback: async ({ current }) => {
            if (typeof current === 'number') {
                await setAsyncState.call(this, { currentMerchIndex: current });
            }
        },
        buttons: {
            prev: slider.querySelector('.popup__merchButton._prev') as HTMLElement,
            next: slider.querySelector('.popup__merchButton._next') as HTMLElement,
        },
        notDragItems: ['.merch__search'],
    });
};

export default sliderInit;
