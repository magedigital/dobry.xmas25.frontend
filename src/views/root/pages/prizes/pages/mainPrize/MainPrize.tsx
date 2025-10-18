import React from 'react';
import { connect } from 'react-redux';

import CustomHead from '@components/customHead/CustomHead.tsx';

import MainPrizeI from './types.ts';

class MainPrize
    extends React.Component<MainPrizeI['props'], MainPrizeI['state']>
    implements MainPrizeI
{
    parent: MainPrizeI['parent'];

    constructor(props: MainPrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="prizesPage _FULL_W _COL _COL_H_CENTER">
                <CustomHead title="Призы - Главный приз" />

                <div className="prizesPage__head _COL _COL_H_CENTER">
                    <h3 className="prizesPage__headTitle">Главный приз</h3>
                    <p className="prizesPage__headDescription">
                        Для участия в розыгрыше <br className='_MOBILE' />на твоём счету должно быть <br className='_MOBILE' />более <span>20</span>{' '}
                        баллов
                    </p>
                </div>
                <div className="prizesPage__content _FULL_W _COL _COL_H_CENTER">
                    <div className="prizesPage__mainPrize"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(MainPrize);
