import React from 'react';

import List from '@components/list/List.tsx';

import PromoterPrizeI from './types.ts';

import renderBlock from './renders/renderBlock.tsx';

class PromoterPrize
    extends React.Component<PromoterPrizeI['props'], PromoterPrizeI['state']>
    implements PromoterPrizeI
{
    parent: PromoterPrizeI['parent'];

    constructor(props: PromoterPrizeI['props']) {
        super(props);
        this.state = {
            currentStep: 'start',
        };

        this.parent = React.createRef();
    }

    renderBlock = renderBlock;

    render() {
        const { currentStep } = this.state;

        return (
            <div ref={this.parent} className="promoterPrize">
                <div className="promoterPrize__inner">
                    <div className="promoterPrize__innerBox">
                        <div className="promoterPrize__innerBoxInner">
                            <List
                                renderKey={currentStep}
                                items={[{ _id: currentStep }]}
                                parentClass="promoterPrize__content"
                                itemClass="promoterPrize__contentBlock"
                                itemStyleProps={[]}
                                parentStyleProps={['width']}
                                parentRealStyleProps={['width']}
                                renderItem={({ item }) => this.renderBlock({ id: item._id })}
                                resizeWidth={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PromoterPrize;
