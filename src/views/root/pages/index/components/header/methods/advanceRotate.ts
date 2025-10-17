import setAnimate from '@functions/setAnimate.ts';

import I from '../types.ts';

const advanceRotate: I['advanceRotate'] = async function (isSet) {
    const startSpeed = this.rotateSpeed;
    const diff = (isSet ? 3 : 1) - startSpeed;

    if (this.advanceAnimationId) {
        cancelAnimationFrame(this.advanceAnimationId);

        delete this.advanceAnimationId;
    }

    setAnimate({
        duration: 1_000,
        draw: (p) => {
            this.rotateSpeed = startSpeed + diff * p;
        },
        getId: (id) => {
            this.advanceAnimationId = id;
        },
    });
};

export default advanceRotate;
