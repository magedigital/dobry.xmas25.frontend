import I from '../types.ts';

const gameRemove: I['gameRemove'] = function () {
    document.dispatchEvent(new CustomEvent('removeGame'));

    const oldScripts = document.querySelectorAll('script[data-game]');
    const oldLinks = document.querySelectorAll('link[data-game]');

    oldScripts.forEach((oldScript) => {
        oldScript.remove();
    });

    oldLinks.forEach((oldLink) => {
        oldLink.remove();
    });
};

export default gameRemove;
