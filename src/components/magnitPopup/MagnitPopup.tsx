import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { StoreT } from '@global/types.ts';

import LentaPopupI from './types.ts';

class LentaPopup
    extends React.Component<LentaPopupI['props'], LentaPopupI['state']>
    implements LentaPopupI
{
    parent: LentaPopupI['parent'];

    constructor(props: LentaPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    steps = [
        {
            title: 'Подтвердите',
            text: (
                <>
                    участие в{' '}
                    <a
                        href="https://2814495.redirect.appmetrica.yandex.com/raffles/raffle/multon_car?analytics_promo_id=multon_car&analytics_promo_type=raffle&appmetrica_tracking_id=966334652660903844&referrer=reattribution%3D1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Приложении «Магнит»
                    </a>
                </>
            ),
        },
        {
            title: 'Купите или закажите',
            text: 'напитки или соки Добрый® с картой Магнит Плюс из Приложения',
        },
        {
            title: 'Выигрывайте призы',
            text: '',
        },
    ];

    items = [
        {
            thumb: 'prize-store-2-1.png',
            title: 'коллекционная<br/>игрушка',
        },
        {
            thumb: 'prize-store-2-2.png',
            title: 'Техника и<br/>электроника',
        },
        {
            thumb: 'prize-store-2-3.png',
            title: 'Подарочные<br/>Сертификаты',
        },
        {
            thumb: 'prize-store-2-4.png',
            title: 'Гарантированно <br/>50 баллов на карту <br/>Магнит первым<br/>20 000 участникам',
        },
    ];

    render() {
        return (
            <div ref={this.parent} className="collectionPopup _dobro _magnit">
                <div className="collectionPopup__wrapper">
                    <div className="collectionPopup__inner">
                        <div
                            className="collectionPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('magnitPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="collectionPopup__innerWrapper">
                            <div className="collectionPopup__innerBox">
                                <div className="collectionPopup__dobro">
                                    <div className="collectionPopup__dobroHead">
                                        <p className="collectionPopup__dobroSubTitle">
                                            Акция Добрый в «Магнит»
                                        </p>
                                        <h3 className="collectionPopup__dobroTitle">
                                            Выиграйте автомобиль за 6 000 000 рублей!
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
                                                    href="https://2814495.redirect.appmetrica.yandex.com/raffles/raffle/multon_car?analytics_promo_id=multon_car&analytics_promo_type=raffle&appmetrica_tracking_id=966334652660903844&referrer=reattribution%3D1"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="collectionPopup__marketContentButton"
                                                >
                                                    <Button
                                                        onClick={() => undefined}
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

export default connect(mapStateToProps)(LentaPopup);
