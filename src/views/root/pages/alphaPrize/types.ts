import Slider from '@classes/slider/Slider';
import InnerPageI from '@components/innerPage/types';

import { ProfileContentT } from '../profile/types';

type PropsT = {};

type StateT = {
    content?: ProfileContentT;
    currentMerchIndex?: number;
    currentCustomValue?: string;
    merchInfoActive?: boolean;
    loadingKey?: string;
    error?: string;
    isConfirm?: boolean;
};

interface AlphaPrizeI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    send(this: AlphaPrizeI): Promise<void>;
    getContent(this: AlphaPrizeI): Promise<void>;

    sliderInit(this: AlphaPrizeI): void;
    merchInfoHandler(this: AlphaPrizeI, merchInfoActive: boolean): Promise<void>;

    renderContent(this: AlphaPrizeI): React.ReactNode;
    renderSlider(this: AlphaPrizeI): React.ReactNode;
    renderHead(this: AlphaPrizeI): React.ReactNode;
}

export default AlphaPrizeI;
