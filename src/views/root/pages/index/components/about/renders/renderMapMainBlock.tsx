import React from 'react';

import changePage from '@functions/changePage.ts';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

import { NavItemT } from '../static/nav.ts';

const renderMapMainBlock: I['renderMapMainBlock'] = function () {
    const { user } = this.props;

    return (
        <>
            <div className="indexAbout__mapNav _FULL">
                {this.nav.map((item) => {
                    const { name, title } = item as NavItemT;
                    let pageName = (item as NavItemT).pageName;
                    let ids: Record<number, string> | undefined;

                    if (name === 'vip') {
                        if (!user) {
                            pageName = '5ka';
                        } else {
                            pageName = 'game-inner';
                            ids = {
                                1: 'FIVE',
                            };
                        }
                    }

                    return (
                        <div
                            className={`indexAbout__mapNavItem _CLICK _${name}`}
                            key={name}
                            onClick={() => {
                                if (pageName) {
                                    changePage({ pageName, ids });

                                    sendGoal(item.goal);
                                }
                            }}
                        >
                            {name === 'prizes' && (
                                <>
                                    <div className="indexAbout__mapNavItemDecor _1" />
                                    <div className="indexAbout__mapNavItemDecor _2" />
                                    <div className="indexAbout__mapNavItemDecor _3" />
                                </>
                            )}
                            {name === 'products' && (
                                <>
                                    <div className="indexAbout__mapNavItemDecor _1" />
                                    <div className="indexAbout__mapNavItemDecor _2" />
                                </>
                            )}
                            <div className="indexAbout__mapNavItemHead"></div>
                            <div
                                className="indexAbout__mapNavItemContent"
                                dangerouslySetInnerHTML={{ __html: title }}
                            ></div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default renderMapMainBlock;
