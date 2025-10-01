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

interface MerchI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    send(this: MerchI): Promise<void>;
    getContent(this: MerchI): Promise<void>;

    sliderInit(this: MerchI): void;
    merchInfoHandler(this: MerchI, merchInfoActive: boolean): Promise<void>;

    renderContent(this: MerchI): React.ReactNode;
    renderSlider(this: MerchI): React.ReactNode;
    renderHead(this: MerchI): React.ReactNode;
}

export default MerchI;
