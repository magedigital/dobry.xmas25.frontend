import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I, { RaffleDataT, SavedRafflePrizeT } from '../types.ts';

import getSavedRaffle from '../utils/getSavedRaffle.ts';

const gameRequest: I['gameRequest'] = async function (play) {
    let response;

    try {
        response = await AxiosInst.post<RaffleDataT>('/XMASWelcomeRaffle', {
            play,
            ...(play ? { guid: this.gameId } : {}),
        });
    } catch (e) {
        return Promise.reject();
    }
    // localStorage.setItem('',this.gameId)

    const { prize, prizeThumbs } = response.data;

    if (play) {
        const curIndex = Math.floor((this.startDur + this.resultDur) / 300) + 2;

        const savedPrize: SavedRafflePrizeT = {
            id: this.gameId,
            image: prize.image,
            name: prize.name,
            date: new Date().getTime(),
            index: curIndex,
        };

        localStorage.setItem(getSavedRaffle().name, JSON.stringify(savedPrize));

        await setAsyncState.call(this, { curIndex, prize });
    }

    await setAsyncState.call(this, { items: prizeThumbs });
};

export default gameRequest;
