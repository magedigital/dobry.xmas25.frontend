import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import changePage from '@functions/changePage.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';

import PrizesI from './types.ts';

import Products from '../../../products/Products.tsx';
import PrizesBlock from '../prizesBlock/PrizesBlock.tsx';

class Prizes extends React.Component<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <>
                <div className="p5kaPrizes _SECTION _1">
                    <img
                        src={require('@media/5ka/element-3-5ka.png')}
                        alt=""
                        className="p5kaPrizes__decor _1"
                    />
                    <div className="p5kaPrizes__inner _INNER">
                        <div className="p5kaPrizes__banner">
                            <div className="p5kaPrizes__bannerInner">
                                <div className="p5kaPrizes__bannerContent _COL">
                                    <h3 className="p5kaPrizes__bannerTitle">
                                        ОБМЕНИВАЙ ЧЕКИ НА&nbsp;ПРИЗЫ
                                    </h3>
                                    <p className="p5kaPrizes__bannerText">
                                        Загрузи 10 чеков из «Пятёрочки» с&nbsp;продукцией Добрый®
                                        и&nbsp;обменяй их на уникальную игрушку лосика
                                    </p>
                                    <div className="p5kaPrizes__bannerButton">
                                        <Button
                                            onClick={() => {
                                                changePage({ pageName: 'cheque' });
                                            }}
                                            className="_wide _white"
                                        >
                                            Загрузить чек
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p5kaPrizes__prizes">
                            <PrizesBlock
                                name="month"
                                title="ежемесячные призы"
                                items={[
                                    { thumb: 'prize-1-1-5ka.png', title: 'Премиальные<br/>часы' },
                                    {
                                        thumb: 'prize-1-2-5ka.png',
                                        title: 'Премиальный Смартфон последней модели',
                                    },
                                    {
                                        thumb: 'prize-1-3-5ka.png',
                                        title: 'Премиальный<br/>Ноутбук',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="p5kaPrizes _SECTION _2">
                    <img
                        src={require('@media/5ka/element-4-5ka.png')}
                        alt=""
                        className="p5kaPrizes__decor _2"
                    />
                    <img
                        src={require('@media/5ka/element-5-5ka.png')}
                        alt=""
                        className="p5kaPrizes__decor _3"
                    />
                    <img
                        src={require('@media/5ka/element-6-5ka.png')}
                        alt=""
                        className="p5kaPrizes__decor _4"
                    />
                    <div className="p5kaPrizes__inner _INNER">
                        <div className="p5kaPrizes__prizes">
                            <PrizesBlock
                                name="week"
                                title="Еженедельные призы"
                                items={[
                                    {
                                        thumb: 'prize-2-1-5ka.png',
                                        title: 'денежный приз<br/>4 000 рублей',
                                    },
                                    {
                                        thumb: 'prize-2-2-5ka.png',
                                        title: 'денежный приз<br/>10 000 рублей',
                                    },
                                    {
                                        thumb: 'prize-2-3-5ka.png',
                                        title: 'денежный приз<br/>20 000 рублей',
                                    },
                                    {
                                        thumb: 'prize-2-4-5ka.png',
                                        title: 'уникальная игрушка лосик',
                                    },
                                ]}
                            />
                        </div>
                        <div className="p5kaPrizes__offer">
                            <div className="p5kaPrizes__offerInner _COL">
                                <div className="p5kaPrizes__offerHead _COL">
                                    <h4 className="p5kaPrizes__offerHeadTitle">
                                        Приглашай друзей в промо
                                    </h4>
                                    <p className="p5kaPrizes__offerHeadDescription">
                                        выиграйте специальный приз
                                    </p>
                                </div>
                                <div className="p5kaPrizes__offerContent _COL">
                                    <p
                                        className="p5kaPrizes__offerText"
                                        dangerouslySetInnerHTML={{
                                            __html: setSpacesInText(
                                                'Копируй свою уникальную ссылку и делись ей с друзьями. После того, как друг зарегистрирует свой первый чек, <b>вы оба попадёте в розыгрыш 100 000 рублей</b>. Больше приглашенных друзей - больше шансов выиграть приз. Не упусти возможность!',
                                            ),
                                        }}
                                    ></p>
                                    <div className="p5kaPrizes__offerButton">
                                        <Button className="_purple" onClick={() => undefined}>
                                            <i className="_link">
                                                <Icon name="link" />
                                            </i>
                                            скопировать ссылку
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p5kaPrizes _SECTION _3">
                    <img
                        src={require('@media/5ka/element-7-5ka.png')}
                        alt=""
                        className="p5kaPrizes__decor _5"
                    />
                    <div className="p5kaPrizes__inner _INNER">
                        <div className="p5kaPrizes__products">
                            <Products inPage={true} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Prizes);
