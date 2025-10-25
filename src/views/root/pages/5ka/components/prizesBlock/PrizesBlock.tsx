import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { store } from '@redux/redux.ts';

import sliderInit from './methods/sliderInit.ts';

import PrizesBlockI from './types.ts';

class PrizesBlock
    extends React.Component<PrizesBlockI['props'], PrizesBlockI['state']>
    implements PrizesBlockI
{
    parent: PrizesBlockI['parent'];
    slider: PrizesBlockI['slider'];
    needSlider: PrizesBlockI['needSlider'];

    constructor(props: PrizesBlockI['props']) {
        super(props);
        this.state = {};

        this.needSlider = store.getState().device === 'mobile' || this.props.items.length >= 4;

        this.parent = React.createRef();
    }

    sliderInit = sliderInit;

    componentDidMount(): void {
        this.sliderInit();
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        const { name, title, items } = this.props;

        return (
            <div
                ref={this.parent}
                className={`p5kaPrizesBlock _COL _${name} ${this.needSlider ? '_needSlider' : ''}`}
            >
                <div className="p5kaPrizesBlock__inner _COL">
                    <h3 className="p5kaPrizesBlock__title">{title}</h3>
                    <div className="p5kaPrizesBlock__slider">
                        {this.needSlider &&
                            (['prev', 'next'] as const).map((key) => (
                                <div
                                    className={`p5kaPrizesBlock__sliderArrow _CLICK _${key}`}
                                    key={key}
                                >
                                    <Icon
                                        name={
                                            key === 'prev' ? 'arrow-prev-short' : 'arrow-next-short'
                                        }
                                    />
                                </div>
                            ))}
                        <div className="p5kaPrizesBlock__sliderItems">
                            {items.map((item, i) => (
                                <div className="p5kaPrizesBlock__sliderItem _COL" key={i}>
                                    <div className="p5kaPrizesBlock__sliderItemHead">
                                        <img
                                            src={require(`@media/5ka/${item.thumb}`)}
                                            alt=""
                                            className="p5kaPrizesBlock__sliderItemImage"
                                        />
                                    </div>
                                    <p
                                        className="p5kaPrizesBlock__sliderItemTitle"
                                        dangerouslySetInnerHTML={{
                                            __html: setSpacesInText(item.title),
                                        }}
                                    ></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrizesBlock;
