import React from 'react';

import Media from '@components/media/Media.tsx';

import PrizesI from './types.ts';

import renderInfo from './renders/renderInfo.tsx';
import renderMain from './renders/renderMain.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import renderRules from './renders/renderRules.tsx';
import rules from './static/rules.ts';

class Prizes extends React.Component<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    rules = rules;

    renderMain = renderMain;
    renderRules = renderRules;
    renderInfo = renderInfo;
    renderPrizes = renderPrizes;

    render() {
        return (
            <div ref={this.parent} className="index5kaPrizes _SECTION">
                <div className="index5kaPrizes__inner _INNER">
                    {this.renderMain()}
                    {this.renderRules()}
                    <Media current="desktop">{this.renderInfo()}</Media>
                    {this.renderPrizes({ name: 'weekly' })}
                    {this.renderPrizes({ name: 'vip' })}
                </div>
            </div>
        );
    }
}

export default Prizes;
