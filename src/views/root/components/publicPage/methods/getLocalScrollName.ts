import I from '../types.ts';

const getLocalScrollName: I['getLocalScrollName'] = function () {
    return [this.name, 'scroll'].join('-');
};

export default getLocalScrollName;
