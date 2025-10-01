import React from 'react';

import codeMoreHandler from './methods/codeMoreHandler.ts';

import IndexI from './types.ts';

import renderCodes from './renders/renderCodes.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import renderRaffles from './renders/renderRaffles.tsx';

class Index extends React.Component<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);
        this.state = {
            currentCodesCount: 10,
        };
        this.parent = React.createRef();
    }

    codeMoreHandler = codeMoreHandler;

    renderCodes = renderCodes;
    renderRaffles = renderRaffles;
    renderPrizes = renderPrizes;

    render() {
        return (
            <>
                {this.renderCodes()}
                {this.renderRaffles()}
                {this.renderPrizes()}
            </>
        );
    }
}

export default Index;
