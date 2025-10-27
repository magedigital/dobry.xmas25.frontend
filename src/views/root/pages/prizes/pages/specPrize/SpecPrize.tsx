import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import CustomHead from '@components/customHead/CustomHead.tsx';
import Media from '@components/media/Media.tsx';
import changePage from '@functions/changePage.ts';

import SpecPrizeI from './types.ts';

class SpecPrize
    extends React.Component<SpecPrizeI['props'], SpecPrizeI['state']>
    implements SpecPrizeI
{
    parent: SpecPrizeI['parent'];

    constructor(props: SpecPrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="prizesPage _FULL_W _COL _COL_H_CENTER">
                <CustomHead title="Призы - Специальный приз в игровых локациях" />

                <div className="prizesPage__head _COL _COL_H_CENTER">
                    <h3 className="prizesPage__headTitle">
                        СПЕЦИАЛЬНЫЙ ПРИЗ <br className="_MOBILE" />в игровых локациях
                    </h3>
                    <p className="prizesPage__headDescription">
                        Для участия в розыгрыше попади <br className="_MOBILE" />
                        в&nbsp;<b>ТОП-500</b> игроков недели
                    </p>
                </div>
                <div className="prizesPage__content _FULL_W _COL _COL_H_CENTER">
                    <div className="prizesPage__spec">
                        <div className="prizesPage__specBanner">Сертификат на 2000₽</div>
                    </div>
                    <div className="prizesPage__button">
                        <Button
                            className="_purple"
                            onClick={() => {
                                changePage({ pageName: 'index', query: { ancor: 'games' } });
                            }}
                        >
                            <Media current="desktop">Перейти К игровым локациям</Media>
                            <Media current="mobile">К игровым локациям</Media>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(SpecPrize);
