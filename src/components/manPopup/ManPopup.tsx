import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import send from './methods/send.ts';

import ManPopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderFields from './renders/renderFields.tsx';
import renderSuccess from './renders/renderSuccess.tsx';

class ManPopup extends Popup<ManPopupI['props'], ManPopupI['state']> implements ManPopupI {
    parent: ManPopupI['parent'];

    constructor(props: ManPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    popupName = 'manPopup' as const;
    name = 'form';
    savedName = 'savedform';
    formData = new FormData();

    send = send;

    renderContent = renderContent;
    renderFields = renderFields;
    renderSuccess = renderSuccess;

    componentDidMount(): void {
        super.componentDidMount();

        this.init({ fields: {}, start: true });
    }

    render() {
        const { isSuccess } = this.state;

        return this.renderPopup({
            children: this.renderContent(),
            onClick: () => this.setState({ isShowAlert: false }),
            className: isSuccess ? '_success' : '',
        });
    }
}

export default ManPopup;
