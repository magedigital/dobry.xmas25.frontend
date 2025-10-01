import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const setStep: I['setStep'] = async function (this: I, currentStep) {
    await setAsyncState.call(this, { currentStep });
};

export default setStep;
