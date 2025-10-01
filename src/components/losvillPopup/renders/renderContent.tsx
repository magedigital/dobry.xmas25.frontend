import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    const { error, loadingKey } = this.state;

    return (
        <>
            {this.renderSuccess()}
            <h2 className="popup__title">
                придумай имена для жителей лосьвилля и выиграй специальный приз*
            </h2>
            <div className="popup__banner _COL _COL_H_CENTER">
                <div className="popup__bannerBanner">
                    <div className="popup__bannerBannerNums">
                        {[0, 1, 2].map((n) => (
                            <div className="popup__bannerBannerNum" key={n}>
                                <div className="popup__bannerBannerNumItem _COL _COL_CENTER">
                                    {n + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="popup__bannerBannerInner _FULL" />
                </div>
                {this.renderFields()}
                <Error className="popup__bannerError" error={error} />
                <div className="popup__bannerButton">
                    <Button
                        className="_purple"
                        onClick={this.send.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        отправить
                    </Button>
                </div>
                <div className="popup__bannerPrize">
                    <div className="popup__bannerPrizeInner">
                        <h3 className="popup__bannerPrizeTitle">специальный приз:</h3>
                        <p className="popup__bannerPrizeText">коллекция из 3-х игрушек-лосей</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default renderContent;
