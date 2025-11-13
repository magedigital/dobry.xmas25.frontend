import React from 'react';

import Table from '@components/table/Table.tsx';

import I from '../types.ts';

const renderTable: I['renderTable'] = function () {
    const { content } = this.state;
    const items = (content?.components?.contestWinners || []).map((item, i) => ({
        ...item,
        _id: i.toString(),
    }));

    return (
        <>
            <div className="winners__table _FULL_W">
                <Table
                    name="contestWinners"
                    items={items}
                    emptyTitle="Победители не найдены"
                    emptyDescription=""
                />
            </div>
        </>
    );
};

export default renderTable;
