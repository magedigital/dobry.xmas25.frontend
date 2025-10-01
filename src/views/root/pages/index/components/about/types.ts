import Slider from '@classes/slider/Slider';
import { StoreT } from '@global/types';

import { MainContentT } from '../../types';
import nav from './static/nav';

type PropsT = {
    content?: MainContentT;
    user: StoreT['user'];
};

type StateT = {
    currentPrizeKey: number;
    isDrag?: boolean;
    newsAlertShow?: boolean;
};

interface AboutI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    nav: typeof nav;
    prizesSlider?: Slider;

    initSlider(this: AboutI): Promise<void>;

    renderDecors(this: AboutI): React.ReactNode;
    renderHead(this: AboutI): React.ReactNode;
    renderHeadDecors(this: AboutI): React.ReactNode;
    renderMainPrize(this: AboutI): React.ReactNode;
    renderMainPrizeDecors(this: AboutI): React.ReactNode;
    renderMap(this: AboutI): React.ReactNode;
    renderMapMainBlock(this: AboutI): React.ReactNode;
    renderMapNewsBlock(this: AboutI): React.ReactNode;
    renderMapPrizesBlock(this: AboutI): React.ReactNode;
    renderMapRulesBlock(this: AboutI): React.ReactNode;
}

export default AboutI;
