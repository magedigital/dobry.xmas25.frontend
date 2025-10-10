import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderNav: I['renderNav'] = function () {
    const { handler } = this.props;
    const nav = this.getNav();

    return (
        <nav className="menu__nav _FULL">
            {nav.map((item) => {
                const ItemTag = item.pageName ? Link : 'a';
                const itemProps = item.pageName
                    ? {
                          pageName: item.pageName,
                          callback: () => {
                              handler(false);
                          },
                      }
                    : {
                          href: item.href,
                          target: '_blank',
                          onClick: () => {
                              if (item.name === 'tg') {
                                  sendGoal('tgBtn');
                              }
                          },
                      };

                return (
                    <div className={`menu__navItem _${item.name}`} key={item.name}>
                        <div className="menu__navItemIcon">
                            <Icon name="menu-star" />
                        </div>
                        <ItemTag className="menu__navItemLink" {...itemProps}>
                            {item.content}
                        </ItemTag>
                    </div>
                );
            })}
        </nav>
    );
};

export default renderNav;
