import React from 'react';
import { connect } from 'react-redux';

import InnerPage from '@components/innerPage/InnerPage.tsx';
import List from '@components/list/List.tsx';
import { StoreT } from '@global/types.ts';

import GamePage from './components/gamePage/GamePage.tsx';

import checkChangeId from './methods/checkChangeId.ts';

import GameI from './types.ts';

class Game extends InnerPage<GameI['props'], GameI['state']> implements GameI {
    parent: GameI['parent'];

    constructor(props: GameI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    checkChangeId = checkChangeId;

    componentDidMount() {
        this.checkChangeId();
    }

    componentDidUpdate() {
        this.checkChangeId();
    }

    render() {
        const { id } = this.state;
        const items = id ? [{ _id: id }] : [];

        return (
            <List
                renderKey={id}
                items={items}
                parentClass="body__pages"
                itemClass={'body__page _NOSCROLL'}
                itemStyleProps={[]}
                parentStyleProps={[]}
                parentRealStyleProps={[]}
                renderItem={({ item }) => (
                    <>
                        <GamePage id={item._id} />
                    </>
                )}
            />
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        levels: state.levels,
        user: state.user,
    };
}

export default connect(mapStateToProps)(Game);
