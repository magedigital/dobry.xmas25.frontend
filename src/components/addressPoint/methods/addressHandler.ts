import Dadata from '@classes/dadata/Dadata.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const addressHandler: I['addressHandler'] = async function ({ value, choice }) {
    let list = [...this.state.list];
    const { onChange } = this.props;

    let resultValue = value;

    if (choice) {
        const div = document.createElement('div');

        div.innerHTML = value;

        resultValue = div.innerText;

        await onChange({ value: resultValue });
        await setAsyncState.call(this, { search: resultValue });

        list = [];
    }

    await setAsyncState.call(this, { search: resultValue, list });

    if (this.timerId) {
        clearTimeout(this.timerId);
    }

    if (!choice) {
        this.timerId = setTimeout(async () => {
            const data = await new Dadata().get(value);

            await setAsyncState.call(this, { list: data });
        }, 300);
    }
};

export default addressHandler;
