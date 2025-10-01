import React from 'react';

import List from '@components/list/List.tsx';

import Result from '../components/result/Result.tsx';
import Start from '../components/start/Start.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { currentStep, renderKey } = this.state;

    return (
        <div
            className="popup _reg _FULL _COL _NOSCROLL"
            onScroll={() => {
                document.dispatchEvent(new CustomEvent('scrollInnerPage'));
            }}
        >
            <div className="popup__inner">
                {this.renderHead()}
                <List
                    renderKey={`${currentStep}${renderKey}`}
                    items={currentStep ? [{ _id: currentStep }] : []}
                    parentClass="popup__blocks"
                    itemClass="popup__blocksItem"
                    itemStyleProps={[]}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    renderItem={({ item }) => (
                        <>
                            {item._id === 'start' && (
                                <Start
                                    setStep={this.setStep.bind(this)}
                                    setRenderKey={this.setRenderKey.bind(this)}
                                />
                            )}
                            {item._id === 'result' && (
                                <Result result={1} setStep={this.setStep.bind(this)} />
                            )}
                        </>
                    )}
                    allItems={['start', 'result']}
                    currentItem={currentStep}
                />
            </div>
        </div>
    );
};

export default renderContent;
