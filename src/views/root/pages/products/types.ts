import InnerPageI from '@components/innerPage/types.ts';

type PropsT = {};

type StateT = {
    loadingKey?: string;
    current: number;
    content?: ProductsContentT;
};

type ProductT = {
    description: {
        header: {
            title: string;
            description: string;
        };
    };
    sku: {
        new?: '1';
        promo?: 'all' | '5ka' | 'ncp';
        title: string;
        thumb: string;
    }[];
};

type ProductsContentT = {
    components: {
        products: ProductT[];
    };
};

interface RulesI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: RulesI): Promise<void>;

    renderContent(this: RulesI): React.ReactNode;
    renderHead(this: RulesI): React.ReactNode;
    renderCards(this: RulesI): React.ReactNode;
}

export default RulesI;
export type { ProductsContentT, ProductT };
