import I from '../types.ts';

const startRotate: I['startRotate'] = async function () {
    const circleNode = this.parent.current!.querySelector(
        '.indexHeader__caruselBack',
    ) as HTMLElement;

    if (!circleNode) {
        return;
    }

    const animate = () => {
        this.rotateDeg += 0.5 * this.rotateSpeed;

        this.animationId = requestAnimationFrame(animate);

        circleNode.style.transform = `rotate(${this.rotateDeg}deg)`;
    };

    this.animationId = requestAnimationFrame(animate);
};

export default startRotate;
