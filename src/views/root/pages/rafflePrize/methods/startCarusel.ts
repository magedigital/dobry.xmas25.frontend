import setAnimate, { makeEaseOut } from '@functions/setAnimate.ts';

import I from '../types.ts';

const startCarusel: I['startCarusel'] = function () {
    const circleNode = this.parent.current!.querySelector(
        '.rafflePrize__spinnerBack',
    ) as HTMLElement;

    if (!circleNode) {
        return;
    }

    const animate = () => {
        this.rotateDeg += 3 * this.rotateSpeed;

        this.animationId = requestAnimationFrame(animate);

        circleNode.style.transform = `rotate(${this.rotateDeg}deg)`;
    };

    this.animationId = requestAnimationFrame(animate);

    setAnimate({
        duration: 1_000,
        draw: (p) => {
            this.rotateSpeed = p;
        },
        // getId: (id) => {
        //     this.advanceAnimationId = id;
        // },
    });

    setTimeout(() => {
        (() => {
            cancelAnimationFrame(this.animationId!);

            const lastRotate = this.rotateDeg;
            const count = Math.ceil(this.rotateDeg / 360);
            const diff = count * 360 - this.rotateDeg + 360 * 2;

            setAnimate({
                duration: 1_800,
                timing: makeEaseOut,
                draw: (p) => {
                    const thisDeg = lastRotate + p * diff;

                    circleNode.style.transform = `rotate(${thisDeg}deg)`;
                },
            });

            setTimeout(() => {
                this.setState({ isComplete: true });
                clearInterval(this.sliderIntervalId);

                setTimeout(() => {
                    this.setState({ isResult: true });
                }, 1_500);
            }, this.resultDur);
        })();
    }, this.startDur);
};

export default startCarusel;
