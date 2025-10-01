import Slider from '@classes/slider/Slider';

import { ProductT } from '../../views/root/pages/products/types';

type PropsT = {
    product: ProductT;
    is5ka?: boolean;
    canSlider: boolean;
};

type StateT = {
    isRotate?: boolean;
    isRotateComplete?: boolean;
};

interface ProductI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;
    timerId?: ReturnType<typeof setTimeout>;
    canSlider?: boolean;

    rotateHandler(this: ProductI, isRotate?: boolean): Promise<void>;
    sliderInit(this: ProductI): void;
    checkSlider(this: ProductI): void;
    stopEvents(this: ProductI, e: Event): void;

    renderMain(this: ProductI): React.ReactNode;
    renderBack(this: ProductI): React.ReactNode;
    renderMainSlider(this: ProductI): React.ReactNode;
}

export default ProductI;
