import I from '../types.ts';

const changeGame: I['changeGame'] = async function () {
    const containerNode = this.parent.current!.querySelector('.container');
    const gameNode = this.parent.current!.querySelector('.game');

    if (1) {
        return;
    }

    if (containerNode) {
        containerNode.removeAttribute('id');
    }

    if (gameNode) {
        gameNode.removeAttribute('id');
    }
};

export default changeGame;
