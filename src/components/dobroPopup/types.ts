type PropsT = {};

type StateT = {
    current?: number;
};

interface DobroPopupI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
}

export default DobroPopupI;
