import React from 'react';

import Media from '@components/media/Media.tsx';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { content } = this.props;

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
                <img src={require('@media/toy-2.png')} alt="" className="indexApp__blockThumb" />

                <Media current="desktop">
                    <a
                        className="indexApp__blockCode"
                        href={content?.components?.app?.qr?.url || '#'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={content?.components?.app?.qr?.thumb}
                            alt=""
                            className="indexApp__blockCodeImage _FULL"
                        />
                    </a>
                </Media>
                <div className="indexApp__blockContent">
                    <Media current="desktop">Отсканируй QR-код для загрузки приложения</Media>
                    <Media current="mobile">
                        <a
                            href={content?.components?.app?.qr?.url || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="indexApp__blockContentLink"
                            onClick={() => {
                                sendGoal('mobileBtn');
                            }}
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
