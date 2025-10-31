import PublicPageI from '../../components/publicPage/types';

type PropsT = {};

type StateT = {
    content?: MainContentT;
};

type MainContentT = {
    components: {
        header: HeaderContentT;
        footer: FooterContentT;
        anounce: {
            slogan: {
                title: string;
                description: string;
            };
            button: {
                title: string;
            };
            carousel: {
                title: string;
                thumbs: string[];
                thumbsExtra: string[];
            };
        };
        howto: {
            steps: {
                description: string;
                thumb: string;
                title: string;
            }[];
        };
        partners: {
            header: {
                title: {
                    title: string;
                };
            };
            items: {
                title: string;
                url: string;
                thumb: string;
            }[];
        };
        prizesCommon: {
            items: {
                title: string;
                description: string;
                thumb: string;
                subtitle: string;
            }[];
        };
        prizes: {
            instant: {
                items: PrizeT[];
            };
            merch: {
                items: PrizeT[];
            };
            weekly: {
                items: PrizeT[];
            };
            main: {
                items: PrizeT[];
            };
        };
    };
};

type PrizeT = {
    title: string;
    description: string;
    thumb: string;
    price?: string;
};

interface IndexI extends PublicPageI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: IndexI): Promise<void>;
}

export default IndexI;
export type { MainContentT, PrizeT as MainPrizeT };
