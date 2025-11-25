import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
import sendGoal from '@functions/sendGoal.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { StoreT } from '@global/types.ts';

import DiksiPopupI from './types.ts';

class DiksiPopup
    extends React.Component<DiksiPopupI['props'], DiksiPopupI['state']>
    implements DiksiPopupI
{
    parent: DiksiPopupI['parent'];

    constructor(props: DiksiPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    steps = [
        {
            title: 'Подтвердите',
            text: <>участие в Приложении «Дикси: клуб друзей и&nbsp;доставка»</>,
        },
        {
            title: 'Купите или закажите',
            text: 'напитки или соки Добрый® с картой «Клуба друзей&nbsp;Дикси»',
        },
        {
            title: 'Выигрывайте призы',
            text: '',
        },
    ];

    items = [
        {
            thumb: 'prize-store-5-1.png',
            title: 'коллекционная<br/>игрушка',
        },
        {
            thumb: 'prize-store-5-2.png',
            title: 'набор<br/>Умный дом',
        },
        {
            thumb: 'prize-store-5-3.png',
            title: 'Подарочные<br/>Сертификаты',
        },
        {
            thumb: 'prize-store-5-4.png',
            title: 'Гарантированно <br/>200 монет Дикси <br/>для первых 1 500 <br/>участников',
        },
    ];

    render() {
        return (
            <div ref={this.parent} className="collectionPopup _dobro _diksi">
                <div className="collectionPopup__wrapper">
                    <div className="collectionPopup__inner">
                        <div
                            className="collectionPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('diksiPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="collectionPopup__innerWrapper">
                            <div className="collectionPopup__innerBox">
                                <div className="collectionPopup__dobro">
                                    <div className="collectionPopup__dobroHead">
                                        <p className="collectionPopup__dobroSubTitle">
                                            Акция Добрый в «Дикси»
                                        </p>
                                        <h3 className="collectionPopup__dobroTitle">
                                            500 000 рублей на&nbsp;обустройство умного дома
                                        </h3>
                                    </div>
                                    <div className="collectionPopup__market">
                                        <div className="collectionPopup__marketAlert">
                                            Пусть Новый год будет технологичный!
                                        </div>
                                        <div className="collectionPopup__marketInner">
                                            <div className="collectionPopup__marketContent">
                                                <p className="collectionPopup__marketContentSupport">
                                                    С 19 ноября 2025 по 13 января 2026 года:
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
                                                    href="https://3757420.redirect.appmetrica.yandex.com/app/main?appmetrica_tracking_id=389878357812116086&referrer=reattribution%3D1"
                                                    target="_blank"
                                                    className="collectionPopup__marketContentButton"
                                                    rel="noreferrer"
                                                >
                                                    <Button
                                                        onClick={() => {
                                                            sendGoal('mapPopupDixyToBtn');
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

export default connect(mapStateToProps)(DiksiPopup);
