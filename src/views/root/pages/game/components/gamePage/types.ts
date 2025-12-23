import InnerPageI from '@components/innerPage/types';

import games from '../../../../../../static/games';

type PropsT = {
    id: keyof typeof games | undefined;
};

type StateT = {};

interface GamePageI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    id?: PropsT['id'];
    isGameInit?: boolean;

    renderContent(this: GamePageI): React.ReactNode;

    gameInit(this: GamePageI): Promise<void>;
    gameRemove(this: GamePageI): void;
    changeGame(this: GamePageI): Promise<void>;
}

export default GamePageI;
