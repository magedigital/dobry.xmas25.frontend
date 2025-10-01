import React from 'react';

import PrizesI from './types.ts';

import renderPrizes from './renders/renderPrizes.tsx';

class Prizes extends React.Component<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    renderPrizes = renderPrizes;

    render() {
        return (
            <>
                <div className="profile__block _codes _FULL_W _COL _COL_H_CENTER">
                    <div className="profile__blockHead _COL _COL_H_CENTER">
                        <h3 className="profile__blockTitle _PROFILE-TITLE">МОИ призы</h3>
                    </div>
                    {this.renderPrizes()}
                </div>
            </>
        );
    }
}

export default Prizes;
