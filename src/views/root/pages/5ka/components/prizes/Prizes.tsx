import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import changePage from '@functions/changePage.ts';
import copyInBuffer from '@functions/copyInBuffer.ts';
import sendGoal from '@functions/sendGoal.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { store } from '@redux/redux.ts';

import { setError } from '../../../../components/errors/utils/errorHandler.ts';

import PrizesI from './types.ts';

import getLink from '../../../invite/utils/getLink.ts';
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
                    <div className="p5kaPrizes__decor _1">
                        <img
                            src={require('@media/5ka/element-3-5ka.png')}
                            alt=""
                            className="p5kaPrizes__decorImage"
                        />
                        <svg
                            width="122"
                            height="50"
                            viewBox="0 0 122 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="p5kaPrizes__decor_glasses"
                            filter="url(#verticalBlur)"
                        >
                            <linearGradient
                                id="glareGradient_r"
                                x1="0%"
                                y1="100%"
                                x2="100%"
                                y2="80%"
                            >
                                <stop offset="30%" stopColor="#FFE7A5" stopOpacity="0" />
                                <stop offset="90.5%" stopColor="#FFE7A5" stopOpacity="0.7" />
                                <stop offset="91%" stopColor="#FFE7A5" stopOpacity="0" />
                            </linearGradient>
                            <rect
                                x="0"
                                y="0"
                                width="60"
                                height="50"
                                fill="url(#glareGradient_r)"
                                mask="url(#mask1)"
                            >
                                <animate
                                    attributeName="x"
                                    values="-300; 70"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="0"
                                y="0"
                                width="60"
                                height="50"
                                fill="url(#glareGradient_r)"
                                mask="url(#mask2)"
                            >
                                <animate
                                    attributeName="x"
                                    values="-220; 150"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </svg>
                    </div>

                    <div className="p5kaPrizes__inner _INNER">
                        <div className="p5kaPrizes__banner">
                            <div className="p5kaPrizes__bannerInner">
                                <div className="p5kaPrizes__particle-container">
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                    <div className="p5kaPrizes__particle"></div>
                                </div>
                                <div className="p5kaPrizes__bannerInner_image">
                                    <div className="p5kaPrizes__bannerInner_moose_sitting">
                                        <div className="p5kaPrizes__bannerInner_moose_sitting_layer">
                                            <img
                                                alt=""
                                                src={require('@media/5ka/dop/alpha-moose-sitting.png')}
                                            />
                                            <svg
                                                width="122"
                                                height="50"
                                                viewBox="0 0 122 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="p5kaPrizes__inner_glasses"
                                                filter="url(#verticalBlur)"
                                            >
                                                <defs>
                                                    <mask id="mask3">
                                                        <path
                                                            d="M90.2582 13.865C88.0786 28.0443 83.3273 27.082 72.3273 27.082C65.8273 23.082 65.8273 24.082 60.3273 22.582C58.3337 18.7777 56.8247 17.583 54.3264 8.58201C51.8281 -0.418945 65.833 0.308741 73.8297 0.0805414C91.3298 -0.418855 92.2232 1.08196 90.2582 13.865Z"
                                                            fill="white"
                                                        />
                                                    </mask>
                                                    <mask id="mask4">
                                                        <path
                                                            d="M0.321861 12.0802C2.67145 27.0811 6.8292 26.0811 17.3222 27.0811C25.8292 22.5811 27.3292 22.5811 34.0693 20.567C36.1707 16.6316 37.3138 15.584 38.3215 8.08254C39.3284 0.581055 29.5105 0.0811171 17.3222 0.0810547C6.82812 0.581055 -1.79252 -1.41894 0.321861 12.0802Z"
                                                            fill="white"
                                                        />
                                                    </mask>
                                                </defs>
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="60"
                                                    height="50"
                                                    fill="url(#glareGradient)"
                                                    mask="url(#mask3)"
                                                >
                                                    <animate
                                                        attributeName="x"
                                                        values="170;-200"
                                                        dur="3s"
                                                        repeatCount="indefinite"
                                                    />
                                                </rect>
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="60"
                                                    height="50"
                                                    fill="url(#glareGradient)"
                                                    mask="url(#mask4)"
                                                >
                                                    <animate
                                                        attributeName="x"
                                                        values="110;-260"
                                                        dur="3s"
                                                        repeatCount="indefinite"
                                                    />
                                                </rect>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p5kaPrizes__bannerInner_moose_sitting">
                                        <div className="p5kaPrizes__bannerInner_moose_sitting_layer">
                                            <img
                                                alt=""
                                                src={require('@media/5ka/dop/alpha-moose-sitting.png')}
                                            />
                                            <svg
                                                width="122"
                                                height="50"
                                                viewBox="0 0 122 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="p5kaPrizes__inner_glasses"
                                                filter="url(#verticalBlur)"
                                            >
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="60"
                                                    height="50"
                                                    fill="url(#glareGradient)"
                                                    mask="url(#mask3)"
                                                >
                                                    <animate
                                                        attributeName="x"
                                                        values="170;-200"
                                                        dur="3s"
                                                        repeatCount="indefinite"
                                                    />
                                                </rect>
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="60"
                                                    height="50"
                                                    fill="url(#glareGradient)"
                                                    mask="url(#mask4)"
                                                >
                                                    <animate
                                                        attributeName="x"
                                                        values="110;-260"
                                                        dur="3s"
                                                        repeatCount="indefinite"
                                                    />
                                                </rect>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p5kaPrizes__bannerInner_moose_sitting">
                                        <div className="p5kaPrizes__bannerInner_moose_sitting_layer">
                                            <img
                                                alt=""
                                                src={require('@media/5ka/dop/alpha-moose-sitting.png')}
                                            />
                                            <svg
                                                width="122"
                                                height="50"
                                                viewBox="0 0 122 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="p5kaPrizes__inner_glasses"
                                                filter="url(#verticalBlur)"
                                            >
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="60"
                                                    height="50"
                                                    fill="url(#glareGradient)"
                                                    mask="url(#mask3)"
                                                >
                                                    <animate
                                                        attributeName="x"
                                                        values="170;-200"
                                                        dur="3s"
                                                        repeatCount="indefinite"
                                                    />
                                                </rect>
                                                <rect
                                                    x="0"
                                                    y="0"
                                                    width="60"
                                                    height="50"
                                                    fill="url(#glareGradient)"
                                                    mask="url(#mask4)"
                                                >
                                                    <animate
                                                        attributeName="x"
                                                        values="110;-260"
                                                        dur="3s"
                                                        repeatCount="indefinite"
                                                    />
                                                </rect>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

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

                                                sendGoal('5kaChangeBlockCheck', true);
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
                                    {
                                        thumb: 'prize-1-2-5ka.png',
                                        title: 'Премиальный Смартфон последней модели',
                                    },
                                    { thumb: 'prize-1-1-5ka.png', title: 'Премиальные<br/>часы' },

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
                    <div className="p5kaPrizes__decor _3">
                        <img
                            src={require('@media/5ka/element-5-5ka.png')}
                            alt=""
                            className="p5kaPrizes__decorImage"
                        />
                    </div>

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
                                    {
                                        thumb: 'prize-2-0-5ka.png',
                                        title: 'Сертификат на покупки в «Пятёрочке»',
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
                                        <Button
                                            className="_purple"
                                            onClick={async () => {
                                                sendGoal('5kaInviteFriends');

                                                if (!store.getState().user) {
                                                    changePage({ pageName: 'auth-login' });
                                                } else {
                                                    await copyInBuffer(getLink());

                                                    setError({
                                                        type: 'success',
                                                        text: 'Ссылка успешно скопирована',
                                                    });
                                                }
                                            }}
                                        >
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
