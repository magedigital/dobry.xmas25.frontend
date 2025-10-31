import React from 'react';
import { connect } from 'react-redux';

import Icon from '@components/icon/Icon.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
import { StoreT } from '@global/types.ts';

import CollectionPopupI from './types.ts';

class CollectionPopup
    extends React.Component<CollectionPopupI['props'], CollectionPopupI['state']>
    implements CollectionPopupI
{
    parent: CollectionPopupI['parent'];

    constructor(props: CollectionPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    mainItems = [
        {
            thumb: 'toy-2.png',
            name: 'мечтатель',
        },
        {
            thumb: 'toy-3.png',
            name: 'заводила',
        },
        {
            thumb: 'toy-1.png',
            name: 'красотка',
        },
    ];

    items = [
        {
            thumb: 'toy-4.png',
            name: 'альфа-лось',
            market: 'Пятёрочка',
        },
        {
            thumb: 'toy-5.png',
            name: 'супергерой',
            market: 'Магнит',
        },
        {
            thumb: 'toy-6.png',
            name: 'домосед',
            market: 'лента',
        },
        {
            thumb: 'toy-7.png',
            name: 'весельчак',
            market: 'Красное и белое Бристоль',
        },
        {
            thumb: 'toy-8.png',
            name: 'путешественник',
            market: 'Перекрёсток',
        },
    ];

    render() {
        return (
            <div ref={this.parent} className="collectionPopup">
                <div className="collectionPopup__wrapper">
                    <div className="collectionPopup__inner">
                        <div
                            className="collectionPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('collectionPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="collectionPopup__innerBox">
                            <div className="collectionPopup__head">
                                <h3 className="collectionPopup__title">собери всю коллекцию!</h3>
                                <p className="collectionPopup__text">
                                    Участвуй в акциях партнеров и&nbsp;собери всю&nbsp;коллекцию
                                    жителей Лосьвилля!
                                </p>
                            </div>
                            <div className="collectionPopup__items _main">
                                {this.mainItems.map((item, i) => (
                                    <div className="collectionPopup__item" key={i}>
                                        <div className="collectionPopup__user">
                                            <div className="collectionPopup__userHead">
                                                <img
                                                    src={require(`@media/${item.thumb}`)}
                                                    alt=""
                                                    className="collectionPopup__userImage"
                                                />
                                            </div>
                                            <div className="collectionPopup__userContent">
                                                <p className="collectionPopup__userName">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="collectionPopup__items _sub">
                                {this.items.map((item, i) => (
                                    <div className="collectionPopup__item" key={i}>
                                        <div className="collectionPopup__user">
                                            <div className="collectionPopup__userHead">
                                                <img
                                                    src={require(`@media/${item.thumb}`)}
                                                    alt=""
                                                    className="collectionPopup__userImage"
                                                />
                                            </div>
                                            <div className="collectionPopup__userContent">
                                                <p className="collectionPopup__userName">
                                                    {item.name}
                                                </p>
                                                <p
                                                    className="collectionPopup__userText"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.market,
                                                    }}
                                                ></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

export default connect(mapStateToProps)(CollectionPopup);
