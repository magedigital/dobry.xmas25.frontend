import { PopupsNamesT, PopupsT } from '@global/types';
import { dispatcher } from '@redux/redux';

export default function handlerPopup<T extends PopupsNamesT>(
    name: T,
    { ...props }: { isShow: boolean } & PopupsT[T],
): void {
    if (name === 'finalPopup' && props.isShow === true) {
        const count = localStorage.getItem('finalPopupCount');

        if (count && +count >= 3) {
            return;
        }
    }

    dispatcher({ type: name as any, data: props });

    document.dispatchEvent(new CustomEvent('popupChange', { detail: { isShow: props.isShow } }));

    if (name === 'finalPopup' && props.isShow === false) {
        try {
            let count = localStorage.getItem('finalPopupCount')
                ? +localStorage.getItem('finalPopupCount')!
                : 0;

            count += 1;

            localStorage.setItem('finalPopupCount', count.toString());
        } catch (error) {}
    }

    if (props.isShow === false) {
        const queryPopup = window.location.search
            .slice(1)
            .split('&')
            .find((item) => item.split('=')[0] === 'popup');

        if (queryPopup) {
            const query = window.location.search
                .slice(1)
                .split('&')
                .filter((item) => item.split('=')[0] !== 'popup')
                .join('&');
            const locationResult = window.location.origin + (query ? `?${query}` : '');

            window.history.replaceState({}, '', locationResult);
        }
    }
}
