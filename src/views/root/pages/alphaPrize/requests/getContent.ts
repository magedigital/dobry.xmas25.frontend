import AxiosInst from '@functions/initAxios.ts';
import { setLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import { ProfileContentT } from '../../profile/types.ts';
import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const response = await AxiosInst.get<ProfileContentT>('/content/profile/');

        setLocalContent('profileContent', response.data);

        await setAsyncState.call(this, { content: response.data });
    } catch (error) {}
};

export default getContent;
