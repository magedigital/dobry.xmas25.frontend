import Slider from '@classes/slider/Slider';

type PropsT = {
    items: { title: string; thumb: string }[];
};

type StateT = {};

interface PrizesI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    sliderInit(this: PrizesI): void;
}

export default PrizesI;
