import Slider from '@classes/slider/Slider';
import InnerPageI from '@components/innerPage/types.ts';
import { StoreT } from '@global/types';

type PropsT = {
    storePages: StoreT['pages'];
    user: StoreT['user'];
};

type StateT = {
    loadingKey?: string;
    isStart?: boolean;
    isComplete?: boolean;
    isResult?: boolean;
    isConfirm?: boolean;
    login?: string;
    prize?: {
        name: string;
        image: string;
    };
    curIndex?: number;
};

type SavedRafflePrizeT = {
    id: string;
    index: number;
    name: string;
    image: string;
    date: number;
};

type RaffleDataT = {
    prize: {
        name: string;
        image: string;
    };
    prizeThumbs: {
        title: string;
        thumb: string;
    }[];
};

interface RafflePrizeI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;
    gameId: string;

    isStart?: boolean;
    rotateDeg: number;
    rotateSpeed: number;
    animationId?: number;
    isRotateComplete?: boolean;
    sliderIntervalId?: ReturnType<typeof setInterval>;

    startDur: number;
    resultDur: number;

    sliderInit(this: RafflePrizeI): void;
    start(this: RafflePrizeI): Promise<void>;
    startCarusel(this: RafflePrizeI): void;

    gameRequest(this: RafflePrizeI): Promise<void>;
    regRequest(this: RafflePrizeI): Promise<void>;

    renderContent(this: RafflePrizeI): React.ReactNode;
    renderHead(this: RafflePrizeI): React.ReactNode;
    renderSlider(this: RafflePrizeI): React.ReactNode;
    renderSpinner(this: RafflePrizeI): React.ReactNode;

    renderStartForm(this: RafflePrizeI): React.ReactNode;
    renderResultForm(this: RafflePrizeI): React.ReactNode;
}

export default RafflePrizeI;
export type { RaffleDataT, SavedRafflePrizeT };
