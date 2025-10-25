import Slider from '@classes/slider/Slider';

type PropsT = {
    name: string;
    title: string;
    items: {
        title: string;
        thumb: string;
    }[];
};

type StateT = {};

interface PrizesBlockI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    needSlider?: boolean;
    slider?: Slider;

    sliderInit(this: PrizesBlockI): void;
}

export default PrizesBlockI;
