import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const regRequest: I['regRequest'] = async function () {
    const { login } = this.state;
    await setAsyncState.call(this, { loadingKey: 'reg' });
    try {
        const response = await AxiosInst.post<{}, ResponseT<{ mailService?: string }>>(
            '/Registration',
            {
                login,
                mode: 'registration',
            },
        );
        console.log(response.data);
    } catch (error) {}
    await setAsyncState.call(this, { loadingKey: undefined });
};

export default regRequest;
