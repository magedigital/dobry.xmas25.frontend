import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderMarkets: I['renderMarkets'] = function () {
    return (
        <div className="indexMap__markets">
            <div className="indexMap__marketsInner _COL">
                <p className="indexMap__marketsTitle">Еще больше акций у&nbsp;партнеров</p>
                <div className="indexMap__marketsItems">
                    {new Array(11).fill({}).map((it, i) => (
                        <div className="indexMap__marketsItem" key={i}>
                            <div className="indexMap__marketsMarket">
                                <Lazy name="2">
                                    <img
                                        src={require(`@media/logo-store-${i + 1}.png`)}
                                        alt=""
                                        className="indexMap__marketsMarketImage"
                                    />
                                </Lazy>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default renderMarkets;
