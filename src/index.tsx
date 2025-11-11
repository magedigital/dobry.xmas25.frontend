import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { getCookie, setCookie } from '@functions/cookies.ts';
import getAuth from '@functions/getAuth.ts';
import handlerPopup from '@functions/handlerPopup.ts';
import sendGoal from '@functions/sendGoal.ts';
import setLoadImages from '@functions/setLoadImages.ts';
import { enums } from '@global/enums.ts';

import changePage from './functions/changePage.ts';
import getStartUrl from './functions/getStartUrl.ts';
import resize from './functions/handlerSize.ts';

import { StoreT, popups } from './global/types.ts';

import pages from './redux/pages.ts';
import { dispatcher, store } from './redux/redux.ts';
import Root from './views/root/Root.tsx';

const resultPages: StoreT['pages'] = {} as StoreT['pages'];

const rootJWT = document.querySelector('#root')!.getAttribute('data-jwt');

if (rootJWT) {
    setCookie(enums.ACCESS_TOKEN, rootJWT);
}

window.userAuthorized = !!getCookie(enums.ACCESS_TOKEN);

const path = getStartUrl(window.location.pathname.slice(1));

pages.forEach((page) => {
    resultPages[page.name] = {
        isShow: false,
    };
});

(async () => {
    const { storePages, levels, pagesIds } = await changePage({
        href: path,
        storePages: resultPages,
        start: true,
    });

    if (levels?.[0]) {
        (document.querySelector('body') as HTMLElement).classList.add(`_${levels[0]}`);
    }

    await dispatcher({ type: 'pages', data: storePages });
    await dispatcher({ type: 'levels', data: levels });
    await dispatcher({ type: 'pagesIds', data: pagesIds });
    await dispatcher({ type: 'rootInit', data: true });

    const queryPopup = window.location.search
        .slice(1)
        .split('&')
        .find((item) => item.split('=')[0] === 'popup');

    if (queryPopup) {
        const popupName = queryPopup.split('=')[1] as keyof typeof popups;

        if (popups[popupName]) {
            handlerPopup(popupName, { isShow: true });
        }
    }

    const utmItem = window.location.search
        .slice(1)
        .split('&')
        .find((item) => item.split('=')[0] === 'utm_source');
    const utmSource = utmItem ? utmItem.split('=')[1] : undefined;

    if (utmSource) {
        localStorage.setItem('utmSource', utmSource);
    }

    const invItem = window.location.search
        .slice(1)
        .split('&')
        .find((item) => item.split('=')[0] === 'inv');
    const inv = invItem ? invItem.split('=')[1] : undefined;

    if (inv) {
        localStorage.setItem('inv', inv);
    }

    await getAuth(!!rootJWT);
})();

document.addEventListener('scroll', () => {
    resize();
});

window.addEventListener('resize', () => {
    resize();
});

window.scrollGoals = {};

const scrollGoalsPages: Record<string, { goal: string }> = {
    index: {
        goal: 'homeScroll',
    },
    '5ka': {
        goal: '5kaScroll',
    },
};

window.addEventListener(
    'scroll',
    (e) => {
        const target = e.target as HTMLElement;

        if (target) {
            const { scrollTop, scrollHeight, offsetHeight } = target;
            const areaHeight = scrollHeight - offsetHeight;
            const scrollPercent = Math.round((scrollTop / areaHeight) * 100);
            const id = target.getAttribute('data-id')!;

            if (scrollGoalsPages[id]) {
                [30, 60, 90].forEach((val) => {
                    const key = `${id}-${val}`;
                    const goalKey = scrollGoalsPages[id].goal + val.toString();

                    if (scrollPercent > val && !window.scrollGoals[key]) {
                        window.scrollGoals[key] = true;

                        console.log(goalKey);

                        sendGoal(goalKey);
                    }
                });
            }
        }
    },
    true,
);

document.oncontextmenu = (e) => {
    e.preventDefault();
};

window.saveJWT = (JWT) => setCookie(enums.ACCESS_TOKEN, JWT);
window.getJWT = () => getCookie(enums.ACCESS_TOKEN);
window.signUp = () => changePage({ pageName: 'auth-reg' });

resize(true);

const loads: {
    event?: boolean;
    fonts?: boolean;
} = {};

const checkLoad = () => {
    if (loads.event && loads.fonts) {
        setTimeout(() => {
            dispatcher({ type: 'windowIsLoad', data: true });
            dispatcher({ type: 'windowIsReady', data: true });

            resize(true);

            document.dispatchEvent(new CustomEvent('windowReady'));
        }, 10);
    }
};

document.fonts.ready.then(() => {
    setTimeout(() => {
        loads.fonts = true;

        dispatcher({ type: 'isLoadFonts', data: true });

        checkLoad();
    }, 10);
});

window.onload = () => {
    setTimeout(() => {
        dispatcher({ type: 'windowIsLoad', data: true });

        const style = document.querySelector('.initStyle');

        if (style) {
            style.remove();
        }

        loads.event = true;

        checkLoad();

        setTimeout(() => {
            setLoadImages('1');
        }, 50);

        setTimeout(() => {
            setLoadImages('2');
        }, 300);

        setTimeout(() => {
            setLoadImages('3');
        }, 500);
    }, 10);
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <Root />
    </Provider>,
);
