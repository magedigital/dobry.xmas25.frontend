import PopupI from '@components/popup/types';

import { losvillPopupFields } from './static/fields';

type PropsT = {};

type StateT = {
    form?: Partial<Record<keyof typeof losvillPopupFields, string>>;
};

interface LosvillPopupI extends PopupI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;

    send(this: LosvillPopupI): Promise<void>;

    renderFields(this: LosvillPopupI): React.ReactNode;
}

export default LosvillPopupI;
