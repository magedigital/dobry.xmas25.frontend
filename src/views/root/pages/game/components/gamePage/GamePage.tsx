import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';

import changeGame from './methods/changeGame.ts';
import gameInit from './methods/gameInit.ts';
import gameRemove from './methods/gameRemove.ts';

import GameI from './types.ts';

import games from '../../../../../../static/games.ts';
import renderContent from './renders/renderContent.tsx';

class GamePage extends InnerPage<GameI['props'], GameI['state']> implements GameI {
    parent: GameI['parent'];
    id: GameI['id'];

    constructor(props: GameI['props']) {
        super(props);
        this.state = {};

        this.id = this.props.id || 'VIBE';
        window.gameId = this.id;

        document.dispatchEvent(new CustomEvent('changeGame'));

        this.changeGame = this.changeGame.bind(this);

        this.parent = React.createRef();
    }

    gameInit = gameInit;
    gameRemove = gameRemove;
    changeGame = changeGame;

    renderContent = renderContent;

    componentDidMount(): void {
        this.gameInit();

        document.addEventListener('changeGame', this.changeGame);
    }

    componentWillUnmount(): void {
        this.gameRemove();

        document.removeEventListener('changeGame', this.changeGame);
    }

    render() {
        const { id } = this.props;
        const game = games[id!];

        return this.renderPage(
            <>
                {game && <CustomHead title={game.metaTitle} />}
                <div
                    className="page _NOSCROLL _FULL _game"
                    onScroll={this.setClosePosition.bind(this)}
                >
                    <div className="page__inner _FULL_W _COL _COL_H_CENTER">
                        <div className="page__innerWrapper _INNER">
                            <div className="page__innerBox">
                                <Media current="desktop">
                                    <div className="page__close">
                                        <CloseBtn />
                                    </div>
                                </Media>
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </>,
        );
    }
}

export default GamePage;
