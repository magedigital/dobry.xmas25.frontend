import Slider from '@classes/slider/Slider';
import InnerPageI from '@components/innerPage/types';

type PropsT = {};

type StateT = {
    loadingKey?: string;
    error?: string;
    inProcess?: boolean;
    isComplete?: boolean;
    isError?: boolean;
    prizes?: PrizeItemT[];
    resultPrize?: {
        name: string;
        image: string;
    };
};

type PrizeItemT = {
    title: string;
    thumb: string;
};

interface RaffleI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;
    intervalId?: ReturnType<typeof setTimeout>;
    allCounter: number;
    tryCounter: number;

    getGame(this: RaffleI): Promise<void>;
    send(this: RaffleI): Promise<void>;
    startRaffle(this: RaffleI, force?: boolean): Promise<void>;
    startTrying(this: RaffleI): Promise<void>;

    renderContent(this: RaffleI): React.ReactNode;
    renderHead(this: RaffleI): React.ReactNode;
    renderRaffle(this: RaffleI): React.ReactNode;
}

export default RaffleI;
export type { PrizeItemT };
