import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Lazy from '@components/lazy/Lazy.tsx';
import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderRules: I['renderRules'] = function () {
    return (
        <div className="index5kaPrizes__rules _FULL_W">
            <Lazy name="3">
                {new Array(3).fill({}).map((item, key) => (
                    <div className={`index5kaPrizes__rulesDecor _${key + 1}`} key={key} />
                ))}
            </Lazy>

            <div className="index5kaPrizes__rulesInner _FULL_W">
                {this.rules.map((rule, key) => (
                    <div className={`index5kaPrizes__rule _${key + 1}`} key={key}>
                        {key === 0 && <Media current="mobile">{this.renderInfo()}</Media>}
                        {key !== this.rules.length - 1 && (
                            <i className="index5kaPrizes__ruleIcon">
                                <Icon name="rules-arrow" />
                            </i>
                        )}
                        <div className="index5kaPrizes__ruleHead _FULL_W">
                            <div className="index5kaPrizes__rulePrize _FULL_W">
                                <Lazy name="1">
                                    {new Array(key === 0 ? 9 : key === 1 ? 6 : 11)
                                        .fill({})
                                        .map((item, decorKey) => (
                                            <div
                                                className={`index5kaPrizes__rulePrizeDecor _${decorKey + 1}`}
                                                key={key}
                                            />
                                        ))}
                                </Lazy>
                            </div>
                            <div className="index5kaPrizes__ruleNumber _COL _COL_CENTER">
                                {key + 1}
                            </div>
                        </div>
                        <div className="index5kaPrizes__ruleContent _FULL_W _COL">
                            <h3 className="index5kaPrizes__ruleTitle">{rule.title}</h3>
                            <p className="index5kaPrizes__ruleDescription">{rule.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default renderRules;
