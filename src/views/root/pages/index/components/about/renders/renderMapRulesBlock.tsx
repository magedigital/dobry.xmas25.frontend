import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Lazy from '@components/lazy/Lazy.tsx';
import Link from '@components/link/Link.tsx';

import I from '../types.ts';

const renderMapRulesBlock: I['renderMapRulesBlock'] = function () {
    const { isDrag } = this.state;
    const { content } = this.props;

    return (
        <>
            <div className="indexAbout__mapRules _FULL_W _COL _COL_H_CENTER">
                <Lazy name="2">
                    {new Array(6).fill({}).map((item, key) => (
                        <div className={`indexAbout__mapRulesDecor _${key + 1}`} key={key} />
                    ))}
                </Lazy>

                <div className="indexAbout__mapRulesLogo _COL _COL_CENTER" />
                <h4 className="indexAbout__mapRulesTitle">Регистрируй чеки из «Пятёрочки»</h4>
                <p className="indexAbout__mapRulesDescription">
                    Заходи в{' '}
                    <Link
                        className="indexAbout__mapRulesDescriptionLink"
                        pageName="game-inner"
                        ids={{ 1: 'FIVE' }}
                    >
                        вип-шатер «Пятёрочка»
                    </Link>
                    , играй и&nbsp;выигрывай призы, а&nbsp;также участвуй в&nbsp;розыгрыше
                    еженедельных и&nbsp;главных призов
                </p>
            </div>
            <div
                className={`indexAbout__mapMainPrizes _COL _COL_H_CENTER ${isDrag ? '_drag' : ''}`}
            >
                <div className="indexAbout__mapMainPrizesButton _prev _CLICK _COL _COL_CENTER">
                    <i className="indexAbout__mapMainPrizesButtonIcon">
                        <Icon name="arrow-prev" />
                    </i>
                </div>
                <div className="indexAbout__mapMainPrizesButton _next _CLICK _COL _COL_CENTER">
                    <i className="indexAbout__mapMainPrizesButtonIcon">
                        <Icon name="arrow-next" />
                    </i>
                </div>
                <div className="indexAbout__mapMainPrizesInner">
                    <div className="indexAbout__mapMainPrizesItems">
                        {content?.components.prizesCommon.items.map((item, key) => (
                            <div className="indexAbout__mapMainPrizesItem" key={key}>
                                <div className="indexAbout__mapMainPrize _FULL_W _COL _COL_H_CENTER">
                                    <div className="indexAbout__mapMainPrizeTitle">
                                        {item.subtitle}
                                    </div>
                                    <div className="indexAbout__mapMainPrizeHead _FULL_W">
                                        <img
                                            src={item.thumb}
                                            alt=""
                                            className="indexAbout__mapMainPrizeImage _FULL"
                                        />
                                    </div>
                                    <div
                                        className="indexAbout__mapMainPrizeDescription"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default renderMapRulesBlock;
