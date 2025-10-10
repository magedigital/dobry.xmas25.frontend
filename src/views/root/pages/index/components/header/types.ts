import Slider from '@classes/slider/Slider';

type PropsT = {};

type StateT = {};

interface HeaderI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    rotateSpeed: number;
    rotateDeg: number;

    slider?: Slider;

    animationId?: number;
    advanceAnimationId?: number;
    sliderTimerId?: ReturnType<typeof setTimeout>;

    startRotate(this: HeaderI): Promise<void>;
    advanceRotate(this: HeaderI, s: boolean): Promise<void>;
    sliderInit(this: HeaderI): void;
    setSliderTimer(this: HeaderI): void;

    renderContent(this: HeaderI): React.ReactNode;
    renderCarusel(this: HeaderI): React.ReactNode;
    renderSlider(this: HeaderI): React.ReactNode;
}

export default HeaderI;
