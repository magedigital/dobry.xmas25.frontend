import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    const { error } = this.state;

    return (
        <>
            {this.renderSuccess()}
            <h2 className="v2popup__title">
                СТАНЬ УЧАСТНИКОМ СПЕЦИАЛЬНОГО <br className="_DESKTOP" />
                ВЫПУСКА <br className="_MOBILE" />
                «ПРЯТОК» В&nbsp;ЛОСЬВИЛЛЕ
            </h2>
            <p className="v2popup__text">
                Отправь свое видео и расскажи в нём, почему именно ты&nbsp;должен сняться в этом
                выпуске!
            </p>
            <div className="v2popup__banner _COL _COL_H_CENTER">
                <div className="v2popup__bannerMan">
                    <div className="v2popup__bannerManInfo">
                        <p className="v2popup__bannerManTitle">
                            ДИМа <br className="_MOBILE" />
                            МАСЛЕННИКОВ
                        </p>
                        <p className="v2popup__bannerManText">
                            Топ-блогер, <br />
                            ведущий <br className="_MOBILE" />
                            Экстремальных пряток
                        </p>
                    </div>
                </div>
                {this.renderFields()}
                <Error className="v2popup__bannerError" error={error} />
                <div className="v2popup__bannerButton">
                    <Button className="_banner2" onClick={this.send.bind(this)}>
                        отправить
                    </Button>
                </div>
            </div>
        </>
    );
};

export default renderContent;
