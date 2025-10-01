import React from 'react';

import Input from '@components/input/Input.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { merch, disabled, infoHandler } = this.props;

    if (merch.custom !== '1') {
        return;
    }

    return (
        <div className="merch__head _FULL_W">
            <div className="merch__search _FULL_W">
                <Input
                    support="Начни вводить свое имя"
                    value={this.getValue({ key: 'search' })?.value || ''}
                    name="merch-name"
                    onChange={async ({ value }) => {
                        await this.searchHandler({ value });
                    }}
                    disabled={disabled}
                />
            </div>
            <i
                className="merch__headInfo _CLICK _COL _COL_CENTER"
                onMouseEnter={() => {
                    infoHandler(true);
                }}
                onMouseLeave={() => {
                    infoHandler(false);
                }}
                onTouchStart={(e) => {
                    e.stopPropagation();
                    
                    infoHandler(true);
                }}
            >
                i
            </i>
        </div>
    );
};

export default renderHead;
