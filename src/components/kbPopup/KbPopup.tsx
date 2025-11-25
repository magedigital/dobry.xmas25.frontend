import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
import sendGoal from '@functions/sendGoal.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { StoreT } from '@global/types.ts';

import KbPopupI from './types.ts';

class KbPopup extends React.Component<KbPopupI['props'], KbPopupI['state']> implements KbPopupI {
    parent: KbPopupI['parent'];

    constructor(props: KbPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    steps = [
        {
            title: 'Покупайте',
            text: <>напитки или соки Добрый® в сети Красное и Белое</>,
        },
        {
            title: 'Оплачивайте',
            text: 'покупку картой Т-Банк',
        },
        {
            title: 'Участвуйте',
            text: 'в розыгрыше призов',
        },
    ];

    items = [
        {
            thumb: 'prize-store-4-1.png',
            title: 'коллекционная<br/>игрушка',
        },
        {
            thumb: 'prize-store-4-2.png',
            title: 'Камера',
        },
        {
            thumb: 'prize-store-4-3.png',
            title: 'Подарочные<br/>Сертификаты<br/>яндекс афиша',
        },
    ];

    render() {
        return (
            <div ref={this.parent} className="collectionPopup _dobro _kb">
                <div className="collectionPopup__wrapper">
                    <div className="collectionPopup__inner">
                        <div
                            className="collectionPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('kbPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="collectionPopup__innerWrapper">
                            <div className="collectionPopup__innerBox">
                                <div className="collectionPopup__dobro">
                                    <div className="collectionPopup__dobroHead">
                                        <p className="collectionPopup__dobroSubTitle">
                                            Акция Добрый в «Красное и Белое»
                                        </p>
                                        <h3 className="collectionPopup__dobroTitle">
                                            Выиграйте 500 000 <br className="_MOBILE" />
                                            рублей <br className="_DESKTOP" />
                                            на самые яркие впечатления!
                                        </h3>
                                    </div>
                                    <div className="collectionPopup__market">
                                        <div className="collectionPopup__marketAlert">
                                            Пусть Новый год <br />
                                            будет наполнен <br />
                                            яркими впечатлениями!
                                        </div>
                                        <div className="collectionPopup__marketInner">
                                            <div className="collectionPopup__marketContent">
                                                <p className="collectionPopup__marketContentSupport">
                                                    С 20 ноября 2025 по 31 декабря 2025 года:
                                                </p>
                                                <div className="collectionPopup__marketContentSteps">
                                                    {this.steps.map((step, i) => (
                                                        <div
                                                            className="collectionPopup__marketContentStep"
                                                            key={i}
                                                        >
                                                            <p className="collectionPopup__marketContentStepTitle">
                                                                {step.title}
                                                            </p>
                                                            {step.text && (
                                                                <>
                                                                    {typeof step.text ===
                                                                    'string' ? (
                                                                        <p
                                                                            className="collectionPopup__marketContentStepText"
                                                                            dangerouslySetInnerHTML={{
                                                                                __html: setSpacesInText(
                                                                                    step.text,
                                                                                ),
                                                                            }}
                                                                        ></p>
                                                                    ) : (
                                                                        <p className="collectionPopup__marketContentStepText">
                                                                            {step.text}
                                                                        </p>
                                                                    )}
                                                                </>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                                <a
                                                    href="https://l.tbank.ru/dobriy_specialproj_11.2025"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="collectionPopup__marketContentButton"
                                                >
                                                    <Button
                                                        onClick={() => {
                                                            sendGoal('mapPopupKBToBtn');
                                                        }}
                                                        className="_topBarBot"
                                                    >
                                                        участвовать
                                                    </Button>
                                                </a>
                                            </div>
                                            <div className="collectionPopup__marketItems">
                                                {this.items.map((item, i) => (
                                                    <div
                                                        className="collectionPopup__marketItem"
                                                        key={i}
                                                    >
                                                        <div className="collectionPopup__marketItemHead">
                                                            <img
                                                                src={require(
                                                                    `@media/stores/${item.thumb}`,
                                                                )}
                                                                alt=""
                                                                className="collectionPopup__marketItemImage"
                                                            />
                                                        </div>
                                                        <div className="collectionPopup__marketItemContent">
                                                            <p
                                                                className="collectionPopup__marketItemName"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: item.title,
                                                                }}
                                                            ></p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        collectionPopup: state.collectionPopup,
    };
}

export default connect(mapStateToProps)(KbPopup);
