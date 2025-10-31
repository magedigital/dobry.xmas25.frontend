import changePage from '@functions/changePage.ts';
import checkChatbot from '@functions/checkChatbot.ts';
import removeTransition from '@functions/removeTransition.ts';

import I from '../types.ts';

const gameInit: I['gameInit'] = async function () {
    console.log('gameInit');

    this.gameRemove();

    const gameNode = this.parent.current!.querySelector('.game');

    gameNode?.setAttribute('oninit', 'onAppReadyHandler');

    window.closeGamePopup = () => {
        if (checkChatbot()) {
            window.Telegram?.WebApp?.close();
        } else {
            window.history.back();
        }
    };

    window.registerBill = () => {
        changePage({ pageName: 'cheque' });
    };

    const script2 = document.createElement('script');

    script2.setAttribute('data-game', '');

    script2.onload = () => {
        const script = document.createElement('script');

        script.setAttribute('data-game', '');

        script.onload = () => {
            removeTransition({ item: '.container' });
        };

        script.src = '/_game/static/js/main.8eaa5995.js';

        document.querySelector('head')!.appendChild(script);
    };

    script2.src = '/_game/interface.js';

    document.querySelector('head')!.appendChild(script2);

    const link = document.createElement('link');

    link.setAttribute('data-game', '');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/_game/static/css/main.cc6bdbbe.css');

    document.querySelector('head')!.appendChild(link);

    const link2 = document.createElement('link');

    link2.setAttribute('data-game', '');
    link2.setAttribute('rel', 'stylesheet');
    link2.setAttribute('href', '/_game/css/desktop.css');

    document.querySelector('head')!.appendChild(link);

    const link3 = document.createElement('link');

    link3.setAttribute('data-game', '');
    link3.setAttribute('rel', 'stylesheet');
    link3.setAttribute('href', '/_game/css/mobile.css');

    document.querySelector('head')!.appendChild(link);
};

export default gameInit;
