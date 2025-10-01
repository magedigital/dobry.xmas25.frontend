import React from 'react';
import { connect } from 'react-redux';

import { StoreT } from '@global/types.ts';

import initSlider from './methods/initSlider.ts';

import AboutI from './types.ts';

import renderDecors from './renders/renderDecors.tsx';
import renderHead from './renders/renderHead.tsx';
import renderHeadDecors from './renders/renderHeadDecors.tsx';
import renderMainPrize from './renders/renderMainPrize.tsx';
import renderMainPrizeDecors from './renders/renderMainPrizeDecors.tsx';
import renderMap from './renders/renderMap.tsx';
import renderMapMainBlock from './renders/renderMapMainBlock.tsx';
import renderMapNewsBlock from './renders/renderMapNewsBlock.tsx';
import renderMapPrizesBlock from './renders/renderMapPrizesBlock.tsx';
import renderMapRulesBlock from './renders/renderMapRulesBlock.tsx';
import nav from './static/nav.ts';

class About extends React.Component<AboutI['props'], AboutI['state']> implements AboutI {
    parent: AboutI['parent'];
    prizesSlider: AboutI['prizesSlider'];

    constructor(props: AboutI['props']) {
        super(props);
        this.state = {
            currentPrizeKey: 0,
        };

        this.parent = React.createRef();
    }

    nav = nav;

    initSlider = initSlider;

    renderDecors = renderDecors;
    renderHead = renderHead;
    renderHeadDecors = renderHeadDecors;
    renderMainPrize = renderMainPrize;
    renderMainPrizeDecors = renderMainPrizeDecors;
    renderMap = renderMap;
    renderMapMainBlock = renderMapMainBlock;
    renderMapNewsBlock = renderMapNewsBlock;
    renderMapPrizesBlock = renderMapPrizesBlock;
    renderMapRulesBlock = renderMapRulesBlock;

    componentDidMount(): void {
        this.initSlider();
    }

    componentDidUpdate() {
        this.initSlider();
    }

    componentWillUnmount(): void {
        if (this.prizesSlider) {
            this.prizesSlider.destroy();
        }
    }

    render() {
        return (
            <div
                ref={this.parent}
                className="indexAbout _SECTION"
                // onTouchStart={() => {
                //     this.setState({ newsAlertShow: false });
                // }}
            >
                {this.renderDecors()}
                <div className="indexAbout__inner _INNER">
                    {this.renderHead()}
                    {this.renderMainPrize()}
                    {this.renderMap()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(About);
