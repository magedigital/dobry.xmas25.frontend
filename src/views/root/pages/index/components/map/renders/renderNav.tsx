import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';
import changePage from '@functions/changePage.ts';
import handlerPopup from '@functions/handlerPopup.ts';
import sendGoal from '@functions/sendGoal.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderNav: I['renderNav'] = function () {
    const { currentHoverItem } = this.state;

    return (
        <div className="indexMap__nav">
            {this.nav.map((item, key) => {
                const { thumbs, pageName, game, popup, goal, animationThumbs, blankLink } = item;
                const titles = typeof item.title === 'string' ? [item.title] : item.title;
                const goalName = typeof goal === 'string' ? goal : goal?.name;
                const isWin = goal && typeof goal === 'object' ? goal.isWin : false;

                return (
                    <div
                        className={`indexMap__navItem _${key + 1} _CLICK`}
                        key={key}
                        onClick={() => {
                            if (pageName) {
                                changePage({ pageName });
                            } else if (game) {
                                changePage({ pageName: 'game-inner', ids: { 1: game } });
                            } else if (popup) {
                                handlerPopup(popup, { isShow: true });
                            } else if (blankLink) {
                                window.open(blankLink, '_blank');
                            }

                            if (goalName) {
                                sendGoal(goalName, isWin);
                            }
                        }}
                    >
                        {key === 6 && <div className="snowball"></div>}

                        <div className="indexMap__snowContainer"></div>
                        <Lazy name="1">
                            <div className="indexMap__navItem-shine" />
                            {thumbs.map((thumb, tKey) => (
                                <div className={`indexMap__navItemThumb _${tKey + 1}`} key={thumb}>
                                    {key === 7 && <div className="indexMap__navItem8Decor"></div>}
                                    <img
                                        src={require(`@media/road/${thumb}`)}
                                        alt=""
                                        className="indexMap__navItemThumbImage"
                                    />
                                </div>
                            ))}
                        </Lazy>
                        {animationThumbs && (
                            <div className="indexMap__navItemAnimation">
                                {animationThumbs.map((th, thK) => (
                                    <img alt="" src={require(`@media/road/${th}`)} key={thK} />
                                ))}
                            </div>
                        )}

                        {titles.map((title, tKey) => {
                            const titleKey = [key, tKey].join('_');

                            return (
                                <div
                                    className={`indexMap__navItemTitle _${tKey + 1} ${item.support ? '_withSupport' : ''} ${currentHoverItem === titleKey ? '_hover' : ''}`}
                                    key={tKey}
                                    onTouchStart={(e) => {
                                        e.stopPropagation();

                                        this.setState({ currentHoverItem: titleKey });
                                    }}
                                    onClick={() => {
                                        if (Array.isArray(item.title)) {
                                            if (tKey === 0) {
                                                handlerPopup('magnitPopup', { isShow: true });
                                            }
                                            if (tKey === 1) {
                                                handlerPopup('diksiPopup', { isShow: true });
                                            }
                                        }
                                    }}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: title }}></span>
                                    {item.support && (
                                        <div
                                            className="indexMap__navItemSupport"
                                            dangerouslySetInnerHTML={{
                                                __html: setSpacesInText(item.support),
                                            }}
                                        ></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default renderNav;
