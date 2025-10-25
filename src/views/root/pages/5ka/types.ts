import PublicPageI from '../../components/publicPage/types';

type PropsT = {};

type StateT = {
    content?: PyterkaContentT;
};

type PyterkaContentT = {
    components: {
        prizes: {
            weekly: {
                info: {
                    title: {
                        title: string;
                    };
                };
                items: {
                    title: string;
                    thumb: string;
                }[];
            };
            vip: {
                info: {
                    title: {
                        title: string;
                    };
                };
                items: {
                    title: string;
                    thumb: string;
                }[];
            };
        };
        footer: FooterContentT;
    };
};

interface PyterkaI extends PublicPageI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: PyterkaI): Promise<void>;
}

export default PyterkaI;
export type { PyterkaContentT };
