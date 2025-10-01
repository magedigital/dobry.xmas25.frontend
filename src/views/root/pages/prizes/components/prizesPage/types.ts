import Slider from '@classes/slider/Slider';

import { MainPrizeT } from '../../../index/types';

type PropsT = {
    title: string;
    metaTitle: string;
    description?: string;
    buttonText: string;
    buttonOnClick: () => void;
    items: MainPrizeT[];
    name: string;
};

type StateT = {};

interface PrizesPageI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    sliderInit(this: PrizesPageI): void;

    renderHead(this: PrizesPageI): React.ReactNode;
    renderContent(this: PrizesPageI): React.ReactNode;
}

export default PrizesPageI;
