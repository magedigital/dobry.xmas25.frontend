import Slider from '@classes/slider/Slider';

import { ProductT } from '../../views/root/pages/products/types';

type PropsT = {
    products: ProductT[];
    is5ka?: boolean;
};

type StateT = {
    current: number;
    products?: ThisProductT[];
};

type ThisProductT = ProductT & { id: string; isCurrent: boolean };

interface ProductsI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;

    sliderInit(this: ProductsI): void;

    getProducts(this: ProductsI): ProductT[];
    setProducts(this: ProductsI, products: ThisProductT[]): Promise<void>;
    updateProducts(
        this: ProductsI,
        items: { key: number; id: string; isCurrent: boolean }[],
    ): Promise<void>;
}

export default ProductsI;
