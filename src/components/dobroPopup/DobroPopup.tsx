import React from 'react';
import { connect } from 'react-redux';

import Slider from '@classes/slider/Slider.ts';
import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import changePage from '@functions/changePage.ts';
import handlerPopup from '@functions/handlerPopup.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { StoreT } from '@global/types.ts';

import DobroPopupI from './types.ts';

class DobroPopup
    extends React.Component<DobroPopupI['props'], DobroPopupI['state']>
    implements DobroPopupI
{
    parent: DobroPopupI['parent'];
    slider?: Slider;

    constructor(props: DobroPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    items = [
        {
            count: '614',
            title: 'занятий были проведены партнёрами в 2024',
        },
        {
            count: '12',
            title: 'регионов принимают участие в программе «Растим добро»',
        },
        {
            count: '11',
            title: 'НКО-проектов содействуют социальной адаптации детей',
        },
        {
            count: '710',
            title: 'подростков получили уникальный опыт и знания',
        },
        {
            count: '40',
            title: 'интернатных учреждений стали частью благотворительной программы',
        },
        {
            count: '90%',
            title: 'участников отметили, что программа помогла им после выпуска из детского дома',
        },
    ];

    sliderInit() {
        const slider = this.parent.current!.querySelector(
            '.collectionPopup__dobroSlider',
        ) as HTMLElement;

        this.slider = new Slider({
            slider,
            area: slider.querySelector('.collectionPopup__dobroSliderInner')!,
            moveArea: this.parent.current!.querySelector('.collectionPopup__dobroSliderItems')!,
            itemClass: 'collectionPopup__dobroSliderItem',
            showEach: true,
            infinity: true,
            buttons: {
                prev: slider.querySelector(
                    '.collectionPopup__dobroSliderArrow._prev',
                ) as HTMLElement,
                next: slider.querySelector(
                    '.collectionPopup__dobroSliderArrow._next',
                ) as HTMLElement,
            },
            callback: ({ currentKey }) => {
                if (typeof currentKey === 'number') {
                    this.setState({ current: currentKey + 1 });
                }
            },
        });
    }

    componentDidMount(): void {
        this.sliderInit();
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        const { current } = this.state;

        return (
            <div ref={this.parent} className="collectionPopup _dobro _dobroMain">
                <div className="collectionPopup__wrapper">
                    <div className="collectionPopup__inner">
                        <div
                            className="collectionPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('dobroPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="collectionPopup__innerWrapper">
                            <div className="collectionPopup__innerBox">
                                <div className="collectionPopup__dobro">
                                    <div className="collectionPopup__dobroHead">
                                        <h3 className="collectionPopup__dobroTitle">
                                            РАСТИМ ДОБРО ВМЕСТЕ
                                        </h3>
                                        <p className="collectionPopup__dobroSubTitle">
                                            ПОМОГАЕМ ВЫПУСКНИКАМ ДЕТСКИХ ДОМОВ
                                        </p>
                                    </div>
                                    <div className="collectionPopup__dobroContent">
                                        <div className="collectionPopup__dobroSlider">
                                            <div className="collectionPopup__dobroSliderHead">
                                                <div className="collectionPopup__dobroSliderCurrents">
                                                    <span>{current}</span> / {this.items.length}
                                                </div>
                                                <div className="collectionPopup__dobroSliderArrows">
                                                    <div className="collectionPopup__dobroSliderArrow _CLICK _prev">
                                                        <Icon name="arrow-prev-short" />
                                                    </div>
                                                    <div className="collectionPopup__dobroSliderArrow _CLICK _next">
                                                        <Icon name="arrow-next-short" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="collectionPopup__dobroSliderInner">
                                                <div className="collectionPopup__dobroSliderItems">
                                                    {this.items.map((item, i) => (
                                                        <div
                                                            className="collectionPopup__dobroSliderItem"
                                                            key={i}
                                                        >
                                                            <div className="collectionPopup__dobroSliderItemCount">
                                                                {item.count}
                                                            </div>
                                                            <p
                                                                className="collectionPopup__dobroSliderItemText"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: setSpacesInText(
                                                                        item.title,
                                                                    ),
                                                                }}
                                                            ></p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="collectionPopup__dobroOffer _COL">
                                            <p className="collectionPopup__dobroOfferText">
                                                Программа «Растим добро» с 2014 года помогает
                                                подросткам из детских домов подготовиться
                                                к&nbsp;самостоятельной жизни. Многие из них
                                                сталкиваются с&nbsp;трудностями в обучении и не
                                                имеют возможностей в&nbsp;дополнительной подготовке
                                                к выпускным экзаменам, что снижает шансы на
                                                поступление в вузы и ссузы.
                                            </p>
                                            <p className="collectionPopup__dobroOfferText">
                                                Новый год – время волшебства и добрых дел. Вы можете
                                                поддержать будущих выпускников, обменивая свои баллы
                                                на оплату дополнительных занятий
                                                с&nbsp;репетиторами.
                                            </p>
                                            <p className="collectionPopup__dobroOfferTitle">
                                                СДЕЛАЙ ВКЛАД <br className='_MOBILE' />В УСПЕШНОЕ БУДУЩЕЕ ВЫПУСКНИКОВ ДЕТСКИХ
                                                ДОМОВ
                                            </p>
                                            <div className="collectionPopup__dobroOfferButton">
                                                <Button
                                                    className="_topBarCollection"
                                                    onClick={() => {
                                                        handlerPopup('dobroPopup', {
                                                            isShow: false,
                                                        });

                                                        changePage({ pageName: 'merch' });
                                                    }}
                                                >
                                                    обменять баллы
                                                </Button>
                                            </div>
                                            <div className="collectionPopup__dobroOfferInfo">
                                                Каждые <b>5 баллов</b> — это сертификат <br className='_MOBILE' />на{' '}
                                                <b>1&nbsp;занятие</b> с&nbsp;репетитором для
                                                подготовки к сдаче{' '}
                                                <b>
                                                    <span>ОГЭ и&nbsp;ЕГЭ</span>
                                                </b>
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

export default connect(mapStateToProps)(DobroPopup);
