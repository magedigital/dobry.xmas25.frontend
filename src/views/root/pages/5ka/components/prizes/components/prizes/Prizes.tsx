import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import sliderInit from './methods/sliderInit.ts';

import PrizesI from './types.ts';

class Prizes extends React.Component<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];
    slider: PrizesI['slider'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};
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
        const { items } = this.props;

        return (
            <div ref={this.parent} className="index5kaPrizes__prizesSlider _FULL_W">
                {(['prev', 'next'] as const).map((key) => (
                    <div
                        className={`index5kaPrizes__prizesSliderButton _CLICK _COL _COL_CENTER _${key}`}
                        key={key}
                    >
                        <i className="index5kaPrizes__prizesSliderButtonIcon">
                            <Icon name={key === 'prev' ? 'arrow-prev' : 'arrow-next'} />
                        </i>
                    </div>
                ))}
                <div className="index5kaPrizes__prizesSliderInner _FULL_W">
                    <div className="index5kaPrizes__prizesSliderItems">
                        {items.map((item, key) => (
                            <div
                                className="index5kaPrizes__prizesSliderItem _COL _COL_H_CENTER"
                                key={key}
                            >
                                <div className="index5kaPrizes__prizesSliderItemHead _FULL_W">
                                    <img
                                        src={item.thumb}
                                        alt=""
                                        className="index5kaPrizes__prizesSliderItemImage _FULL"
                                    />
                                </div>
                                <div className="index5kaPrizes__prizesSliderItemTitle">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Prizes;
