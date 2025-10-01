import Slider from '@classes/slider/Slider';

type PropsT = {
    title: string;
    description: string;
    items: { title: string; image: string }[];
    buttonText: string;
    buttonOnClick: () => void;
    sliderCallback: (current: number) => void;
};

type StateT = {};

interface RaffleI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    sliderInit(this: RaffleI): void;

    renderHead(this: RaffleI): React.ReactNode;
    renderContent(this: RaffleI): React.ReactNode;
}

export default RaffleI;
