import InnerPageI from '@components/innerPage/types';
import { StoreT } from '@global/types';

type PropsT = {
    user: StoreT['user'];
};

type StateT = {
    isCopy?: boolean;
};

interface InviteI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    timerId?: ReturnType<typeof setTimeout>;

    copyHandler(this: InviteI): Promise<void>;
    getLink(this: InviteI): string;

    renderContent(this: InviteI): React.ReactNode;
    renderHead(this: InviteI): React.ReactNode;
}

export default InviteI;
