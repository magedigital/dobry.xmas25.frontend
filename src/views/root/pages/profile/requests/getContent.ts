import AxiosInst from '@functions/initAxios.ts';
import { setLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I, { ProfileContentT, ProfileDataT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const dataResponse = await AxiosInst.get<ProfileDataT>('/GetCabinetInfo');
        const contentResponse = await AxiosInst.get<ProfileContentT>('/content/profile/');

        setLocalContent('profileData', dataResponse.data);
        setLocalContent('profileContent', contentResponse.data);

        await setAsyncState.call(this, {
            data: dataResponse.data,
            content: contentResponse.data,
            pagesRenderKey: new Date().getTime().toString(),
        });
    } catch (error) {}
};

export default getContent;
