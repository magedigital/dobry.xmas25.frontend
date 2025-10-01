import React from 'react';
import { connect } from 'react-redux';

import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';

import getScrollPage from './methods/getScrollPage.ts';
import startRaffle from './methods/startRaffle.ts';
import startTrying from './methods/startTrying.ts';

import RaffleI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderRaffle from './renders/renderRaffle.tsx';
import getGame from './requests/getGame.ts';
import send from './requests/send.ts';

class Raffle extends InnerPage<RaffleI['props'], RaffleI['state']> implements RaffleI {
    parent: RaffleI['parent'];
    intervalId: RaffleI['intervalId'];

    constructor(props: RaffleI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    innerClassName = 'popup__inner';
    tryCounter = 0;
    allCounter = 0;

    send = send;
    getGame = getGame;
    startTrying = startTrying;

    getScrollPage = getScrollPage;
    startRaffle = startRaffle;

    renderContent = renderContent;
    renderHead = renderHead;
    renderRaffle = renderRaffle;

    async componentDidMount() {
        super.componentDidMount();

        this.getGame();
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render() {
        return this.renderPage(
            <>
                <CustomHead title="Моментальный розыгрыш" />

                {this.renderContent()}
                {this.renderDecors()}
            </>,
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Raffle);
