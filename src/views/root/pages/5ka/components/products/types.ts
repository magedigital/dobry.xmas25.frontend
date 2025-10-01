import { ProductT } from '../../../products/types';

type PropsT = {};

type StateT = {
    content?: ProductsContentT;
};

type ProductsContentT = {
    components: {
        products: ProductT[];
    };
};

interface ProductsI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: ProductsI): Promise<void>;
}

export default ProductsI;
export type { ProductsContentT };
