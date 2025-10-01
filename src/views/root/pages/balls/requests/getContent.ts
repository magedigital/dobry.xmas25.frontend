import AxiosInst from '@functions/initAxios.ts';
import { setLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import { ProfileDataT } from '../../profile/types.ts';
import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const response = await AxiosInst.get<ProfileDataT>('/GetCabinetInfo');

        setLocalContent('profileData', response.data);

        await setAsyncState.call(this, {
            data: response.data,
        });
    } catch (error) {}
};

export default getContent;
