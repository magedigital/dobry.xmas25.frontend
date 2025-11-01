import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const send: I['send'] = async function () {
    const { form } = this.state;

    await setAsyncState.call(this, { loadingKey: 'send', error: undefined });

    if (form) {
        (Object.keys(form) as (keyof typeof form)[]).forEach((key) => {
            if (form[key] && key !== 'video') {
                this.formData.set(key, form[key]);
            }
        });
    }

    try {
        await AxiosInst.post('/UploadBloggerContestVideo', this.formData);

        const innerNode = this.parent.current!.querySelector('.v2popup__inner') as HTMLElement;
        const innerHeight = innerNode.offsetHeight;

        innerNode.style.height = `${innerHeight}px`;

        setTimeout(() => {
            this.setState({ isSuccess: true });
        }, 10);
    } catch (e) {
        const error = e as ResponseErrorT;

        await setAsyncState.call(this, { error: error?.errorText || 'Ошибка сервера' });
    }

    await setAsyncState.call(this, { loadingKey: undefined });
};

export default send;
