import axios from 'axios';

import AxiosInst from '@functions/initAxios.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const checkName: I['checkName'] = async function (name) {
    const { setLoading } = this.props;

    if (!name.trim()) {
        await setLoading(false, undefined);

        return;
    }

    if (this.cancelSource) {
        this.cancelSource.cancel();
    }

    this.cancelSource = axios.CancelToken.source();

    try {
        await AxiosInst.post(
            '/CheckFestName',
            { festTitle: name },
            { cancelToken: this.cancelSource.token },
        );
        await setLoading(false, undefined);
    } catch (e) {
        const error = e as ResponseErrorT;

        if (error?.errorText) {
            await setLoading(false, error.errorText);
            await setAsyncState.call(this, { items: [''] });
        } else {
            await setLoading(false, undefined);
        }
    }
};

export default checkName;
