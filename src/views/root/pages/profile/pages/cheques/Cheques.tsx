import React from 'react';

import Button from '@components/button/Button.tsx';
import List from '@components/list/List.tsx';
import Table from '@components/table/Table.tsx';

import codeMoreHandler from './methods/codeMoreHandler.ts';

import ChequesI from './types.ts';

class Cheques extends React.Component<ChequesI['props'], ChequesI['state']> implements ChequesI {
    parent: ChequesI['parent'];

    constructor(props: ChequesI['props']) {
        super(props);
        this.state = {
            currentCodesCount: 10,
        };
        this.parent = React.createRef();
    }

    codeMoreHandler = codeMoreHandler;

    render() {
        const { currentCodesCount } = this.state;
        const { setRenderKey, data } = this.props;
        const allChecks = data?.checks || [];
        const checks = allChecks
            .map((item) => ({
                _id: item.id,
                date: item.date,
                fd: item.fd,
                status: item.status,
                result: item.result,
            }))
            .filter((item, key) => key < currentCodesCount);
        const hasMore = allChecks.length > currentCodesCount;

        return (
            <div className="profile__block _codes _FULL_W _COL _COL_H_CENTER">
                <div className="profile__blockHead _COL _COL_H_CENTER">
                    <h3 className="profile__blockTitle _PROFILE-TITLE">МОИ Чеки из «Пятёрочки»</h3>
                </div>
                <div className="profile__blockTable _FULL_W">
                    <Table name="cheques" items={checks} callback={setRenderKey} />
                </div>
                <List
                    renderKey={`${!!hasMore}`}
                    items={hasMore ? [{ _id: 'button' }] : []}
                    parentClass="profile__blockDynamicButtonWrapper"
                    itemStyleProps={[]}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    renderItem={() => (
                        <div className="profile__blockDynamicButton">
                            <Button
                                className="_purpleEmpty"
                                onClick={this.codeMoreHandler.bind(this)}
                            >
                                Показать еще
                            </Button>
                        </div>
                    )}
                    resizeWidth={true}
                />
            </div>
        );
    }
}

export default Cheques;
