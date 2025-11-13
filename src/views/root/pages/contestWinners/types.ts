import InnerPageI from '@components/innerPage/types.ts';

import { MainContentT } from '../index/types';

type PropsT = {};

type StateT = {
    loadingKey?: string;
    content?: MainContentT;
};

type WinnersDataT = {
    raffles: {
        ended: boolean;
        from: string;
        id: string;
        name: string;
        publish: string;
        to: string;
    }[];
    winners: {
        email: string;
        phone: string;
        prize: string;
        publish: string;
        raffleId: string;
    }[];
};

interface WinnersI extends InnerPageI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: WinnersI): Promise<void>;

    renderContent(this: WinnersI): React.ReactNode;
    renderHead(this: WinnersI): React.ReactNode;
    renderWinners(this: WinnersI): React.ReactNode;
    renderTable(this: WinnersI): React.ReactNode;
}

export default WinnersI;
export type { WinnersDataT };
