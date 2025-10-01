import { CancelTokenSource } from 'axios';

import Slider from '@classes/slider/Slider';
import EditBlockI from '@components/editBlock/types';

import { ProfileContentT, ProfileMerchT } from '../../../profile/types';

type PropsT = {
    merch: ProfileMerchT;
    festNaming: ProfileContentT['components']['buy']['merch']['festNaming'];
    disabled: boolean;
    infoHandler: (b: boolean) => void;
    customCallback: (fullName: string | undefined) => void;
    setLoading: (l: boolean, error?: string) => Promise<void>;
};

type StateT = {
    items: string[];
};

interface MerchI extends EditBlockI<StateT> {
    props: PropsT;

    parent: React.RefObject<HTMLDivElement | null>;
    slider?: Slider;
    checkTimerId?: ReturnType<typeof setTimeout>;
    cancelSource?: CancelTokenSource;

    searchHandler(this: MerchI, data: { value: string }): Promise<void>;
    sliderInit(this: MerchI): Promise<void>;
    checkName(this: MerchI, name: string): Promise<void>;

    renderHead(this: MerchI): React.ReactNode;
    renderContent(this: MerchI): React.ReactNode;
}

export default MerchI;
