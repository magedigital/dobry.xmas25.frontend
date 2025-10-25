import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import changePage from '@functions/changePage.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';

import StepsI from './types.ts';

class Steps extends React.Component<StepsI['props'], StepsI['state']> implements StepsI {
    parent: StepsI['parent'];

    constructor(props: StepsI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    steps = [
        {
            thumb: 'step1-5ka.jpg',
            title: 'Покупай',
            text: 'газированные напитки и соки Добрый® в «Пятёрочке» или в доставке «Пятёрочки»',
        },
        {
            thumb: 'step2-5ka.jpg',
            title: 'Регистрируй',
            text: 'чеки на сайте, в телеграм-боте или Добрый Винбокс',
        },
        {
            thumb: 'step3-5ka.jpg',
            title: 'УчастВуй',
            text: 'в розыгрыше ценных призов, а также получи гарантированный приз:',
        },
    ];

    render() {
        return (
            <div ref={this.parent} className="p5kaSteps _SECTION">
                <img
                    src={require('@media/5ka/element-1-5ka.png')}
                    alt=""
                    className="p5kaSteps__decor _1"
                />
                <img
                    src={require('@media/5ka/element-2-5ka.png')}
                    alt=""
                    className="p5kaSteps__decor _2"
                />
                <div className="p5kaSteps__inner _INNER">
                    <div className="p5kaSteps__items">
                        {this.steps.map((step, i) => (
                            <div className="p5kaSteps__item" key={i}>
                                {i !== this.steps.length - 1 && (
                                    <div className="p5kaSteps__itemArrow">
                                        <Icon name="arrow-next-short" />
                                    </div>
                                )}
                                <div className="p5kaSteps__itemInner">
                                    <div className="p5kaSteps__itemHead">
                                        <div className="p5kaSteps__itemHeadInner">
                                            <img
                                                src={require(`@media/5ka/${step.thumb}`)}
                                                alt=""
                                                className="p5kaSteps__itemHeadImage"
                                            />
                                        </div>
                                    </div>
                                    <div className="p5kaSteps__itemContent">
                                        <h3 className="p5kaSteps__itemTitle">{step.title}</h3>
                                        <p
                                            className="p5kaSteps__itemText"
                                            dangerouslySetInnerHTML={{
                                                __html: setSpacesInText(step.text),
                                            }}
                                        ></p>
                                    </div>
                                </div>
                                {i === this.steps.length - 1 && (
                                    <p className="p5kaSteps__itemInfo">
                                        * 50 рублей на телефон за 1-й чек
                                        <br />
                                        первым 10 000 участникам
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="p5kaSteps__banner">
                        <div className="p5kaSteps__bannerInner _COL">
                            <div className="p5kaSteps__bannerContent _COL">
                                <h3 className="p5kaSteps__bannerTitle">ВЫИГРАЙ СУПЕРПРИЗ!</h3>
                                <p className="p5kaSteps__bannerText">
                                    Загрузи 20 чеков из «Пятёрочки» с&nbsp;продукцией Добрый®
                                    и&nbsp;получи шанс выиграть суперприз 1 000 000 рублей.
                                </p>
                                <div className="p5kaSteps__bannerButton">
                                    <Button
                                        className="_purple"
                                        onClick={() => {
                                            changePage({ pageName: 'cheque' });
                                        }}
                                    >
                                        Загрузить чек
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Steps);
