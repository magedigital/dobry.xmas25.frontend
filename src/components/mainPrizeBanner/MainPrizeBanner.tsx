import React from 'react';

import setSpacesInText from '@functions/setSpacesInText.ts';

import MainPrizeBannerI from './types.ts';

import renderDecors from './renders/renderDecors.tsx';

class MainPrizeBanner
    extends React.Component<MainPrizeBannerI['props'], MainPrizeBannerI['state']>
    implements MainPrizeBannerI
{
    parent: MainPrizeBannerI['parent'];

    constructor(props: MainPrizeBannerI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    renderDecors = renderDecors;

    render() {
        const { title, text, className = '' } = this.props;

        return (
            <div ref={this.parent} className={`mainPrizeBanner _FULL ${className}`}>
                {this.renderDecors()}
                <div className="mainPrizeBanner__inner _FULL _COL">
                    <div className="mainPrizeBanner__content _COL _COL_H_CENTER">
                        {title && <h3 className="mainPrizeBanner__title">{title}</h3>}

                        <p
                            className="mainPrizeBanner__description"
                            dangerouslySetInnerHTML={{ __html: setSpacesInText(text) }}
                        ></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPrizeBanner;
