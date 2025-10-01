import AxiosInst from '@functions/initAxios.ts';
import { setLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import { ProfileContentT } from '../../profile/types.ts';
import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    const savedContent = this.state.content;

    try {
        const response = await AxiosInst.get<ProfileContentT>('/content/profile/');

        setLocalContent('profileContent', response.data);

        await setAsyncState.call(this, { content: response.data });

        if (
            !savedContent ||
            savedContent.components.buy.merch.prizes.length !==
                response.data.components.buy.merch.prizes.length
        ) {
            this.sliderInit();
        }
    } catch (error) {}
};

export default getContent;
