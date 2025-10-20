import Slider from '@classes/slider/Slider';
import InnerPageI from '@components/innerPage/types.ts';
import { StoreT } from '@global/types';

type PropsT = {
    storePages: StoreT['pages'];
};

type StateT = {
    loadingKey?: string;
    isStart?: boolean;
    isComplete?: boolean;
    isResult?: boolean;
    isConfirm?: boolean;
};

interface RafflePrizeI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    isStart?: boolean;
    rotateDeg: number;
    rotateSpeed: number;
    animationId?: number;
    isRotateComplete?: boolean;
    sliderIntervalId?: ReturnType<typeof setInterval>;

    sliderInit(this: RafflePrizeI): void;
    start(this: RafflePrizeI): Promise<void>;
    startCarusel(this: RafflePrizeI): void;

    renderContent(this: RafflePrizeI): React.ReactNode;
    renderHead(this: RafflePrizeI): React.ReactNode;
    renderSlider(this: RafflePrizeI): React.ReactNode;
    renderSpinner(this: RafflePrizeI): React.ReactNode;

    renderStartForm(this: RafflePrizeI): React.ReactNode;
    renderResultForm(this: RafflePrizeI): React.ReactNode;
}

export default RafflePrizeI;
