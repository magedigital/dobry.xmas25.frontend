type PropsT = {};

type StateT = {};

interface LentaPopupI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
}

export default LentaPopupI;
