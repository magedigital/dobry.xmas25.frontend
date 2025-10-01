type PropsT = {};

type StateT = {
    content?: WaitContentT;
};

type WaitContentT = {
    components: {
        counter: {
            days: string;
            daysTitle: string;
            title: string;
        };
    };
};

interface WaitIndexI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: WaitIndexI): Promise<void>;

    renderInfo(this: WaitIndexI): React.ReactNode;
    renderTopBar(this: WaitIndexI): React.ReactNode;
    renderContent(this: WaitIndexI): React.ReactNode;
    renderHead(this: WaitIndexI): React.ReactNode;
    renderTimer(this: WaitIndexI): React.ReactNode;
    renderCards(this: WaitIndexI): React.ReactNode;
    renderBanner(this: WaitIndexI): React.ReactNode;
    renderFoot(this: WaitIndexI): React.ReactNode;
}

export default WaitIndexI;
export type { WaitContentT };
