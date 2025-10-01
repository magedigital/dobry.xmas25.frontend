type PropsT = {};

type StateT = {
    days?: string;
    daysTitle?: string;
};

type CounterComponentT = {
    days: string;
    daysTitle: string;
    title: string;
};

interface WaitHeaderI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: WaitHeaderI): Promise<void>;
}

export type { CounterComponentT };
export default WaitHeaderI;
