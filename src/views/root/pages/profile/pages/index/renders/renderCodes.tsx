import React from 'react';

import Button from '@components/button/Button.tsx';
import List from '@components/list/List.tsx';
import Table from '@components/table/Table.tsx';
import getEndText from '@functions/getEndText.ts';

import I from '../types.ts';

const renderCodes: I['renderCodes'] = function () {
    const { currentCodesCount } = this.state;
    const { setRenderKey, data } = this.props;
    const allCodes = data?.codes || [];
    const codes = allCodes
        .map((item) => ({
            _id: item.code,
            code: item.code,
            date: item.registered,
        }))
        .filter((item, key) => key < currentCodesCount);
    const hasMore = allCodes.length > currentCodesCount;

    return (
        <div className="profile__block _codes _FULL_W _COL _COL_H_CENTER">
            <div className="profile__blockHead _COL _COL_H_CENTER">
                <h3 className="profile__blockTitle _PROFILE-TITLE">МОИ КОДЫ</h3>
                {data && data.balance < 10 && (
                    <p className="profile__blockDescription">
                        Для участия в еженедельных розыгрышах зарегистрируй ещё{' '}
                        <span>{10 - data.balance}</span>{' '}
                        {getEndText(10 - data.balance, ['код', 'кода', 'кодов'])}
                    </p>
                )}
            </div>
            <div className="profile__blockTable _FULL_W">
                <Table name="codes" items={codes} callback={setRenderKey} />
            </div>
            {false && (
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
            )}
        </div>
    );
};

export default renderCodes;
