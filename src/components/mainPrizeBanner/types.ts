type PropsT = {
    title?: string;
    text: string;
    className?: string;
};

type StateT = {};

interface MainPrizeBannerI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderDecors(this: MainPrizeBannerI): React.ReactNode;
}

export default MainPrizeBannerI;
