import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderBanner: I['renderBanner'] = function () {
    return (
        <div className="waitIndex__banner">
            <div className="waitIndex__bannerBlock">
                <h4 className="waitIndex__bannerTitle">собирай коды</h4>
                <p className="waitIndex__bannerText">Готовься к старту акции</p>
            </div>
            <div className="waitIndex__bannerBlock">
                <a
                    href="/upload/docs/rules.pdf"
                    className="waitIndex__bannerButton"
                    target="_blank"
                >
                    <Button className="_rules _mediumSize" onClick={() => undefined}>
                        правила акции
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default renderBanner;
