import { StoreT } from '@global/types';

type PropsT = {
    storePages: StoreT['pages'];
    isFix?: boolean;
    className?: string;
    cb: (b: boolean) => void;
};

type StateT = {
    isShowMenu?: boolean;
    isShowIndex?: boolean;
};

interface TopBarI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    menuHandler(this: TopBarI, isShowMenu?: boolean): Promise<void>;

    renderHead(this: TopBarI): React.ReactNode;
    render5kaHead(this: TopBarI): React.ReactNode;
    renderMenu(this: TopBarI): React.ReactNode;
    render5kaAlert(this: TopBarI): React.ReactNode;
}

export default TopBarI;
