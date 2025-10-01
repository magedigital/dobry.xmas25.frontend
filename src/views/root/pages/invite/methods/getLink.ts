import I from '../types.ts';

const getLink: I['getLink'] = function () {
    const { user } = this.props;

    return `https://dobrycola-promo.ru/?inv=${user?.userId}`;
};

export default getLink;
