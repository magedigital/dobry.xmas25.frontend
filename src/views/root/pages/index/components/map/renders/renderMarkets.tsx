import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';
import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderMarkets: I['renderMarkets'] = function () {
    const { content } = this.props;

    return (
        <div className="indexMap__markets">
            <div className="indexMap__marketsInner _COL">
                <p
                    className="indexMap__marketsTitle"
                    dangerouslySetInnerHTML={{
                        __html: setSpacesInText(content?.components.partners.header.title.title),
                    }}
                ></p>
                <div className="indexMap__marketsItems">
                    {content?.components.partners.items.map((item, i) => (
                        <div className="indexMap__marketsItem" key={i}>
                            <a
                                href={item.url}
                                className="indexMap__marketsMarket"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Lazy name="2">
                                    <img
                                        src={item.thumb}
                                        alt=""
                                        className="indexMap__marketsMarketImage"
                                    />
                                </Lazy>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default renderMarkets;
