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

interface PyterkaI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: PyterkaI): Promise<void>;
}

export default PyterkaI;
export type { PyterkaContentT };
