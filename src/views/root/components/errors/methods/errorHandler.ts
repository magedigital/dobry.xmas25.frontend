import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const errorHandler: I['errorHandler'] = async function ({ detail }) {
    const { text, action, id, type } = detail;
    const errors = [...this.state.errors.map((error) => JSON.parse(JSON.stringify(error)))];

    if (action === 'delete') {
        const index = errors.findIndex((error) => error._id === id);

        if (index !== -1) {
            errors.splice(index, 1);

            await setAsyncState.call(this, { errors });
        }

        return;
    }

    errors.push({ _id: id, text: text || 'Неизвестная', type });

    await setAsyncState.call(this, { errors });

    if (type !== 'info') {
        this.timers[id] = setTimeout(() => {
            this.errorHandler({ detail: { id, action: 'delete', type } });
        }, 3_000);
    }
};

export default errorHandler;
