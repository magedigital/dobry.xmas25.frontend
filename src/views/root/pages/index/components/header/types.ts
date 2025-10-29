import Slider from '@classes/slider/Slider';
import { StoreT } from '@global/types';

import { MainContentT } from '../../types';

type PropsT = {
    user: StoreT['user'];
    content: MainContentT | undefined;
};

type StateT = {};

interface HeaderI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    isInit?: boolean;

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
