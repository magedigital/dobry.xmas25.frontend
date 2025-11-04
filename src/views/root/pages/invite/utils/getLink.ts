import { store } from '@redux/redux';

export default function getLink(): string {
    const { user } = store.getState();

    return `https://dobrycola-promo.ru/?inv=${user?.userId}`;
}
