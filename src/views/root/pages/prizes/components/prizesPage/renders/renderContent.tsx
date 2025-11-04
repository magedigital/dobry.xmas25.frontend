import React from 'react';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { needSlider } = this.state;
    const { buttonText, buttonOnClick, items, name } = this.props;

    // console.log(current);

    return (
        <div className="prizesPage__content _FULL_W _COL _COL_H_CENTER">
            <div className="prizesPage__slider _FULL_W">
                {needSlider && (
                    <>
                        {(['prev', 'next'] as const).map((key) => (
                            <div
                                className={`prizesPage__sliderButton _CLICK _COL _COL_CENTER _${key}`}
                                key={key}
                            >
                                <i className="prizesPage__sliderButtonIcon">
                                    <Icon
                                        name={
                                            key === 'prev' ? 'arrow-prev-short' : 'arrow-next-short'
                                        }
                                    />
                                </i>
                            </div>
                        ))}
                    </>
                )}
                <div className="prizesPage__sliderInner _FULL_W">
                    <div className="prizesPage__sliderItems">
                        {items.map((item, key) => (
                            <div
                                className={`prizesPage__sliderItem _COL _COL_H_CENTER ${item.price ? '_withInfo' : ''} ${item.description ? '_withAlert' : ''}`}
                                key={key}
                            >
                                <div className="prizesPage__sliderItemHead">
                                    <div className="prizesPage__sliderItemHeadInner">
                                        <img
                                            src={item.thumb}
                                            alt=""
                                            className="prizesPage__sliderItemImage"
                                        />
                                    </div>

                                    {name === 'merch' && (
                                        <div className="prizesPage__sliderItemBalls">
                                            {item.price}
                                        </div>
                                    )}
                                </div>
                                <div className="prizesPage__sliderItemDescription">
                                    {item.title}{' '}
                                    {name === 'merch' && item.description && (
                                        <div className="prizesPage__sliderItemDescriptionInfo">
                                            <div className="prizesPage__sliderItemDescriptionInfoIcon _CLICK">
                                                i
                                            </div>
                                            <div
                                                className="prizesPage__sliderItemDescriptionInfoAlert"
                                                dangerouslySetInnerHTML={{
                                                    __html: setSpacesInText(item.description),
                                                }}
                                            ></div>
                                        </div>
                                    )}
                                    {name === 'weekly' && item.thumbsExtra && (
                                        <div className="prizesPage__sliderItemDescriptionInfo _weekly">
                                            <div className="prizesPage__sliderItemDescriptionInfoIcon _CLICK">
                                                i
                                            </div>
                                            <div className="prizesPage__sliderItemDescriptionInfoWindow">
                                                <div className="prizesPage__sliderItemDescriptionInfoWindowHead">
                                                    <img
                                                        src={item.thumbsExtra[0][0]}
                                                        alt=""
                                                        className="prizesPage__sliderItemDescriptionInfoWindowImage"
                                                    />
                                                </div>
                                                <p
                                                    className="prizesPage__sliderItemDescriptionInfoWindowText"
                                                    dangerouslySetInnerHTML={{
                                                        __html: setSpacesInText(
                                                            item.thumbsExtra[0][1],
                                                        ),
                                                    }}
                                                ></p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="prizesPage__button">
                <Button className="_purple" onClick={buttonOnClick}>
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

export default renderContent;
