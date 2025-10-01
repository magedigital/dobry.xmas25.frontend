import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const send: I['send'] = async function () {
    const { form } = this.state;

    await setAsyncState.call(this, { loadingKey: 'send', error: undefined });

    try {
        await AxiosInst.post('/UploadElksNames', { ...form });

        const innerNode = this.parent.current!.querySelector('.popup__inner') as HTMLElement;
        const innerHeight = innerNode.offsetHeight;

        innerNode.style.height = `${innerHeight}px`;

        setTimeout(() => {
            setAsyncState.call(this, { isSuccess: true });
        }, 10);
    } catch (e) {
        const error = e as ResponseErrorT;

        await setAsyncState.call(this, { error: error?.errorText || 'Ошибка сервера' });
    }

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default send;
