type PropsT = {};

type StateT = {
    isFixTopBar?: boolean;
    isShowMenu?: boolean;
};

interface PublicPageI<P = {}, S = {}> extends React.Component<PropsT & P, StateT & S> {
    props: PropsT & P;
    state: StateT & S;

    isFixTopBar?: boolean;
    name: string;
    scrollGoals: Partial<Record<1 | 2 | 3, true>>;

    parent: React.RefObject<HTMLDivElement | null>;
    scrollNode: React.RefObject<HTMLDivElement | null>;

    getLocalScrollName(this: PublicPageI): string;
    setStartScroll(this: PublicPageI): void;
    scrollHandler(this: PublicPageI): Promise<void>;

    renderPage(
        this: PublicPageI,
        data: { render: () => React.ReactNode; name: string },
    ): React.ReactNode;
}

export default PublicPageI;
