import React from 'react';

import changePage from '@functions/changePage.ts';
import handlerPopup from '@functions/handlerPopup.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderNav: I['renderNav'] = function () {
    return (
        <div className="indexMap__nav">
            {this.nav.map((item, key) => {
                const { thumbs, pageName, game, popup } = item;
                const titles = typeof item.title === 'string' ? [item.title] : item.title;

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
                            }
                        }}
                    >
                        {thumbs.map((thumb, tKey) => (
                            <div className={`indexMap__navItemThumb _${tKey + 1}`} key={thumb}>
                                <img
                                    src={require(`@media/${thumb}`)}
                                    alt=""
                                    className="indexMap__navItemThumbImage"
                                />
                            </div>
                        ))}
                        {titles.map((title, tKey) => (
                            <div
                                className={`indexMap__navItemTitle _${tKey + 1} ${item.support ? '_withSupport' : ''}`}
                                key={tKey}
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
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default renderNav;
