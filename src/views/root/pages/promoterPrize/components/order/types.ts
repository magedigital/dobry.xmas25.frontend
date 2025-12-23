import Slider from '@classes/slider/Slider';

import { orderPrizes } from './static/prizes';

type PropsT = {
    code: string;
    success: () => Promise<void>;
};

type StateT = {
    loadingKey?: string;
    error?: string;
    isConfirm?: boolean;
    currentMerchIndex?: number;
};

interface MerchI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    prizes: typeof orderPrizes;

    send(this: MerchI): Promise<void>;

    sliderInit(this: MerchI): void;

    renderContent(this: MerchI): React.ReactNode;
    renderSlider(this: MerchI): React.ReactNode;
    renderHead(this: MerchI): React.ReactNode;
}

export default MerchI;
