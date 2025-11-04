import { PageNamesT } from '@global/types';

import prizes from './static/prizes';

type PropsT = {
    handler: (isShow?: boolean) => Promise<void>;
};

type StateT = {};

type NavItemT = {
    name: string;
    pageName?: PageNamesT;
    content?: string;
    href?: string;
    onClick?: () => void;
    goal?: string;
};

interface MenuI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    prizes: typeof prizes;

    getNav(this: MenuI): NavItemT[];

    renderNav(this: MenuI): React.ReactNode;
    renderActions(this: MenuI): React.ReactNode;
    renderPrizes(this: MenuI): React.ReactNode;
}

export default MenuI;
export type { NavItemT };
