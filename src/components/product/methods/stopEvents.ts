import I from '../types';

const stopEvents: I['stopEvents'] = function (e) {
    e.stopPropagation();
};

export default stopEvents;
