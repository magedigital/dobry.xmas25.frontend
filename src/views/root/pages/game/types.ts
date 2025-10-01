import InnerPageI from '@components/innerPage/types';
import { StoreT } from '@global/types';

type PropsT = {
    levels: StoreT['levels'];
    user: StoreT['user'];
};

type StateT = {
    id?: string;
};

interface GameI extends InnerPageI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;
    id?: string;

    checkChangeId(this: GameI): void;
}

export default GameI;
