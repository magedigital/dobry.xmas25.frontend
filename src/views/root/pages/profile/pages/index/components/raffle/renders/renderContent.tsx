import React from 'react';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { items, buttonOnClick, buttonText } = this.props;

    return (
        <div className="profileRaffle__content _FULL_W _COL _COL_H_CENTER">
            <div className="profileRaffle__slider _FULL_W">
                {(['prev', 'next'] as const).map((key) => (
                    <div
                        className={`profileRaffle__sliderButton _CLICK _COL _COL_CENTER _${key}`}
                        key={key}
                    >
                        <div className="profileRaffle__sliderButtonIcon">
                            <Icon name={key === 'prev' ? 'arrow-prev-short' : 'arrow-next-short'} />
                        </div>
                    </div>
                ))}
                <div className="profileRaffle__sliderInner _FULL_W">
                    <div className="profileRaffle__sliderItems">
                        {items.map((item, key) => (
                            <div className="profileRaffle__sliderItem _COL _COL_H_CENTER" key={key}>
                                <div className="profileRaffle__sliderItemHead">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="profileRaffle__sliderItemImage"
                                    />
                                </div>
                                <p
                                    className="profileRaffle__sliderItemContent"
                                    dangerouslySetInnerHTML={{
                                        __html: setSpacesInText(item.title),
                                    }}
                                ></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="profileRaffle__button">
                <Button onClick={buttonOnClick} className="_purple">
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

export default renderContent;
