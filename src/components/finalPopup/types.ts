type PropsT = {};

type StateT = {};

interface FinalPopupI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
}

export default FinalPopupI;
