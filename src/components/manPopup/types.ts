import PopupI from '@components/popup/types';

import { manPopupFields } from './static/fields';

type PropsT = {};

type StateT = {
    form?: Partial<Record<keyof typeof manPopupFields, string>>;
    isShowAlert?: boolean;
};

interface ManPopupI extends PopupI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;

    formData: FormData;

    send(this: ManPopupI): Promise<void>;

    renderFields(this: ManPopupI): React.ReactNode;
}

export default ManPopupI;
