import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderMap: I['renderMap'] = function () {
    return (
        <div className="indexAbout__map">
            <Lazy name="2">
                <>
                    {new Array(14).fill({}).map((item, key) => (
                        <div className={`indexAbout__mapMainDecor _${key + 1}`} key={key} />
                    ))}
                    {new Array(5).fill({}).map((item, key) => (
                        <div className={`indexAbout__mapMainBackDecor _${key + 1}`} key={key} />
                    ))}
                </>
            </Lazy>

            <div className="indexAbout__mapBlock _main _FULL_W _COL">
                {this.renderMapMainBlock()}
            </div>
            <div className="indexAbout__mapBlock _news _FULL_W _COL">
                {this.renderMapNewsBlock()}
            </div>
            <div className="indexAbout__mapBlock _prizes _FULL_W _COL">
                {this.renderMapPrizesBlock()}
            </div>
            <div className="indexAbout__mapBlock _rules _FULL_W _COL">
                {this.renderMapRulesBlock()}
            </div>
        </div>
    );
};

export default renderMap;
