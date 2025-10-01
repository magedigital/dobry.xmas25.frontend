import I from '../types.ts';

const widgetLoad: I['widgetLoad'] = async function () {
    const src = 'https://fivepost.ru/static/5post-widget-v1.0.js';
    // const src = 'https://preprod-omni.x5.ru/static/5post-widget-v1.0.js';
    const script = document.createElement('script');

    script.onload = () => {
        this.widgetInit();
    };

    script.setAttribute('src', src);

    document.body.append(script);
};

export default widgetLoad;
