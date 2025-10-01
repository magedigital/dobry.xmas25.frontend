import React from 'react';

import Media from '@components/media/Media.tsx';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div
            className="indexApp__content _COL _FULL_W"
            onClick={() => {
                sendGoal('mobileBtn');
            }}
        >
            <div className="indexApp__screen"></div>
            <div className="indexApp__block _ROW">
                <Media current="desktop">
                    <a
                        className="indexApp__blockCode"
                        href="https://dobry-winbox.onelink.me/FAl8/summerteens"
                        target="_blank"
                        rel="noreferrer"
                    ></a>
                </Media>
                <div className="indexApp__blockContent">
                    <Media current="desktop">Отсканируй QR-код для загрузки приложения</Media>
                    <Media current="mobile">
                        <a
                            href="https://dobry-winbox.onelink.me/FAl8/summerteens"
                            target="_blank"
                            rel="noreferrer"
                            className="indexApp__blockContentLink"
                        >
                            Скачай приложение
                        </a>
                    </Media>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
