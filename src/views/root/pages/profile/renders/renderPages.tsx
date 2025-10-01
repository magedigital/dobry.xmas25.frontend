import React from 'react';

import Link from '@components/link/Link.tsx';
import Pages from '@components/pages/Pages.tsx';

import I from '../types.ts';

const renderPages: I['renderPages'] = function () {
    const { pagesRenderKey } = this.state;

    return (
        <div className="profile__pages _FULL_W">
            <div className="profile__pagesTabs _FULL_W _ROW">
                {(Object.keys(this.pages) as (keyof typeof this.pages)[]).map((name) => {
                    const page = this.pages[name];

                    return (
                        <Link
                            className="profile__pagesTab _COL _COL_CENTER"
                            key={name}
                            pageName={name}
                        >
                            {page.title}
                        </Link>
                    );
                })}
            </div>
            <Pages
                parentClass="profile__pagesItems"
                itemClass="profile__pagesItem"
                context={this}
                pages={this.pages}
                filter={(page) => page.parentName === 'profile'}
                parentStyleProps={['width']}
                parentRealStyleProps={['width']}
                renderKey={pagesRenderKey}
                parentName="profile"
            />
        </div>
    );
};

export default renderPages;
