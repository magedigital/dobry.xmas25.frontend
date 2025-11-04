import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { prize } = this.props;

    return (
        <div className="prize__foot _COL _COL_H_CENTER">
            <div
                className="prize__name"
                onClick={() => {
                    if (prize.status === 'DOWNLOAD') {
                        window.open(prize.url, '_blank');
                    }
                }}
            >
                {prize.status === 'DOWNLOAD' && (
                    <i className="prize__nameIcon">
                        <Icon name="download" />
                    </i>
                )}
                <span dangerouslySetInnerHTML={{ __html: setSpacesInText(prize.title) }}></span>
                {prize.detailPicture && (
                    <>
                        <div className="prize__nameInfo">
                            <i className="prize__nameInfoIcon">i</i>
                            <div className="prize__nameInfoAlert">
                                <div className="prize__nameInfoAlertHead">
                                    <img
                                        src={prize.detailPicture}
                                        alt=""
                                        className="prize__nameInfoAlertImage"
                                    />
                                </div>

                                <p
                                    className="prize__nameInfoAlertText"
                                    dangerouslySetInnerHTML={{
                                        __html: setSpacesInText(prize.detailText),
                                    }}
                                ></p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default renderFoot;
