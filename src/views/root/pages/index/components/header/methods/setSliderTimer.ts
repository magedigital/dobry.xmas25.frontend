import I from '../types.ts';

const setSliderTimer: I['setSliderTimer'] = function () {
    if (this.sliderTimerId) {
        clearTimeout(this.sliderTimerId);
    }

    this.sliderTimerId = setTimeout(() => {
        if (!this.slider) {
            return;
        }

        if (document.visibilityState === 'visible') {
            this.slider.handlerButton({ dir: 'next' });
        }

        this.setSliderTimer();
    }, 3_000);
};

export default setSliderTimer;
