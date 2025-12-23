import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
import { store } from '@redux/redux';

import IdPopupI from './types.ts';

class IdPopup extends React.Component<IdPopupI['props'], IdPopupI['state']> implements IdPopupI {
    parent: IdPopupI['parent'];

    constructor(props: IdPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const user = store.getState().user;

        return (
            <div
                className="popup _isOverlay _FULL _NOSCROLL"
                onScroll={() => {
                    document.dispatchEvent(new CustomEvent('scrollInnerPage'));
                }}
            >
                <div className="popup__wrapper">
                    <div className="popup__inner">
                        <div className="popup__innerBox">
                            <div className="popup__head _COL _COL_H_CENTER">
                                <div className="popup__title">ID участника</div>
                                <div className="popup__close">
                                    <CloseBtn
                                        onClick={() => {
                                            handlerPopup('idPopup', { isShow: false });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="popup__qr">
                                <img
                                    src={`https://api.qrcode-monkey.com/qr/custom?data=${user?.userId}&size=300`}
                                    alt=""
                                    className="popup__qrImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(IdPopup);
