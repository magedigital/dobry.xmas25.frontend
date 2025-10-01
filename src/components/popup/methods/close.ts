import { dispatcher } from '@redux/redux.ts';

import I from '../types.ts';

const close: I['close'] = async function () {
    await dispatcher({
        type: this.popupName,
        data: {
            isShow: false,
        },
    });
};

export default close;
