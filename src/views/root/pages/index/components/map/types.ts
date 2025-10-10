import { mapNav } from './static/nav';
import { mapSections } from './static/sections';

type PropsT = {
    getScrollNode: () => HTMLElement | null | undefined;
};

type StateT = {
    currentSection: keyof typeof mapSections;
};

interface MapI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    currentSection: keyof typeof mapSections;

    nav: typeof mapNav;
    sections: typeof mapSections;

    scrollThrottle: () => void;

    scrollHandler(this: MapI): Promise<void>;
    scrollToSection(this: MapI, section: keyof typeof mapSections): void;

    renderTop(this: MapI): React.ReactNode;
    renderNav(this: MapI): React.ReactNode;
    renderBack(this: MapI): React.ReactNode;
}

export default MapI;
