import I from '../types.ts';

const startTrying: I['startTrying'] = async function () {
    const { prizes } = this.state;
    const tryItems: number[] = [];

    while (tryItems.length < prizes!.length) {
        let randKey = Math.round(Math.random() * (prizes!.length - 1));

        while (tryItems.includes(randKey)) {
            randKey = Math.round(Math.random() * (prizes!.length - 1));
        }

        tryItems.push(randKey);
    }

    const setPrize = () => {
        const currentKey = tryItems[this.tryCounter];
        const currentPrizeNode = this.parent.current!.querySelector(
            '.popup__rafflePrize._current',
        ) as HTMLElement;
        const prizeNode = this.parent.current!.querySelector(
            `.popup__rafflePrize._${currentKey + 1}`,
        ) as HTMLElement;

        if (currentPrizeNode) {
            currentPrizeNode.classList.remove('_current');
        }

        if (prizeNode) {
            prizeNode.classList.add('_current');
        }

        this.tryCounter += 1;
        this.allCounter += 1;

        if (this.tryCounter === prizes!.length) {
            this.tryCounter = 0;
        }
    };

    setPrize();

    this.intervalId = setInterval(() => {
        setPrize();

        if (this.allCounter === 8) {
            clearInterval(this.intervalId);

            const currentPrizeNode = this.parent.current!.querySelector(
                '.popup__rafflePrize._current',
            ) as HTMLElement;

            if (currentPrizeNode) {
                currentPrizeNode.classList.remove('_current');
            }

            this.setState({ isComplete: true, isError: !this.state.resultPrize });
        }
    }, 250);
};

export default startTrying;
