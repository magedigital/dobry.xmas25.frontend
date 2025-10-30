import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
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
            title: 'регистрируйте',
            text: 'карту Nº1 на сайте <a href="https://dobry.lenta.com/" target="_blank">dobry.lenta.com</a>',
        },
        {
            title: 'Покупайте',
            text: 'напитки и соки Добрый® с картой Nº1',
        },
        {
            title: 'участвуйте',
            text: 'в розыгрыше еженедельных <br/>и Главного приза',
        },
    ];

    items = [
        {
            thumb: 'prize-store-1-1.png',
            title: 'кастомная <br/>игрушка',
        },
        {
            thumb: 'prize-store-1-2.png',
            title: 'Подарочные <br/>карты в Ленту',
        },
        {
            thumb: 'prize-store-1-3.png',
            title: 'Всё для <br/>домашнего <br/>уюта',
        },
        {
            thumb: 'prize-store-1-4.png',
            title: 'гарантированно<br/>100 баллов <br/>на Карту Nº1*',
        },
    ];

    render() {
        return (
            <div ref={this.parent} className="collectionPopup _dobro _lenta">
                <div className="collectionPopup__wrapper">
                    <div className="collectionPopup__inner">
                        <div
                            className="collectionPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('lentaPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="collectionPopup__innerWrapper">
                            <div className="collectionPopup__innerBox">
                                <div className="collectionPopup__dobro">
                                    <div className="collectionPopup__dobroHead">
                                        <p className="collectionPopup__dobroSubTitle">
                                            Акция Добрый в «Ленте»
                                        </p>
                                        <h3 className="collectionPopup__dobroTitle">
                                            Выиграйте квартиру в&nbsp;москве!
                                        </h3>
                                    </div>
                                    <div className="collectionPopup__market">
                                        <div className="collectionPopup__marketAlert">
                                            Пусть Новый год будет по-домашнему уютным!
                                        </div>
                                        <div className="collectionPopup__marketInner">
                                            <div className="collectionPopup__marketContent">
                                                <p className="collectionPopup__marketContentSupport">
                                                    С 01 ноября 2025 по 11 января 2026 года:
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
                                                            <p
                                                                className="collectionPopup__marketContentStepText"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: step.text,
                                                                }}
                                                            ></p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="collectionPopup__marketContentButton">
                                                    <Button
                                                        className="_topBarBot"
                                                        onClick={() => {
                                                            window.open(
                                                                'https://dobry.lenta.com/',
                                                                '_blank',
                                                            );
                                                        }}
                                                    >
                                                        участвовать
                                                    </Button>
                                                </div>
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
                                                        {i === this.items.length - 1 && (
                                                            <p className="collectionPopup__marketItemInfo">
                                                                * Первым 3 000 участникам
                                                            </p>
                                                        )}
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
