import { PopupsNamesT, PopupsT } from '@global/types';
import { dispatcher } from '@redux/redux';

export default function handlerPopup<T extends PopupsNamesT>(
    name: T,
    { ...props }: { isShow: boolean } & PopupsT[T],
): void {
    dispatcher({ type: name as any, data: props });

    document.dispatchEvent(new CustomEvent('popupChange', { detail: { isShow: props.isShow } }));

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
