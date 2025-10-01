import EditBlockI from '@components/editBlock/types';
import { PopupsT } from '@global/types';

type PropsT = {};

type StateT = {};

interface PopupI<P = {}, S = {}> extends EditBlockI<StateT & S> {
    props: PropsT & P;

    parent: React.RefObject<HTMLDivElement | null>;

    popupName: keyof PopupsT;

    close(this: PopupI): Promise<void>;

    renderPopup(
        this: PopupI,
        data: { children: React.ReactNode; onClick?: () => void; className?: string },
    ): React.ReactNode;
    renderClose(this: PopupI): React.ReactNode;
    renderContent(): React.ReactNode;
}

export default PopupI;
