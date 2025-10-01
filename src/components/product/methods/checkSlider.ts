import { ListenerT } from '@global/types.ts';

import I from '../types.ts';

const checkSlider: I['checkSlider'] = function () {
    const { canSlider } = this.props;
    const buttons = this.parent.current!.querySelectorAll('.product__button');

    if (canSlider !== this.canSlider) {
        this.canSlider = canSlider;

        if (this.slider) {
            this.slider.destroy();
            this.slider = undefined;
        }

        if (canSlider) {
            this.sliderInit();

            buttons.forEach((button) => {
                (button.removeEventListener as ListenerT)('touchstart', this.stopEvents, {
                    passive: false,
                });
                (button.removeEventListener as ListenerT)('mousedown', this.stopEvents, {
                    passive: false,
                });
                button.addEventListener('touchstart', this.stopEvents, { passive: false });
                button.addEventListener('mousedown', this.stopEvents, { passive: false });
            });
        }
    }
};

export default checkSlider;
