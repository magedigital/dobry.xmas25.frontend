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
            <div className="indexApp__screen">
                <img
                    src={require('@media/app-screen.jpg')}
                    alt=""
                    className="indexApp__screenImage"
                />
            </div>
            <div className="indexApp__block _ROW">
                <img src={require('@media/app-toy.png')} alt="" className="indexApp__blockThumb" />

                <Media current="desktop">
                    <a
                        className="indexApp__blockCode"
                        href="https://dobry-winbox.onelink.me/FAl8/summerteens"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={require('@media/app-code.png')}
                            alt=""
                            className="indexApp__blockCodeImage _FULL"
                        />
                    </a>
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
                            Скачай
                            <br />
                            приложение
                        </a>
                    </Media>
                </div>
                <img className="indexApp__blockLogo" src={require('@media/app-icon.png')} alt="" />
            </div>
        </div>
    );
};

export default renderContent;
