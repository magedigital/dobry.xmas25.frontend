import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';

import StartI from './types.ts';

class Start extends React.Component<StartI['props'], StartI['state']> implements StartI {
    parent: StartI['parent'];

    constructor(props: StartI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { setStep, uploadQr } = this.props;

        return (
            <div ref={this.parent} className="popup__block _COL _COL_H_CENTER">
                <div className="popup__cheque _COL _COL_H_CENTER">
                    <p className="popup__chequeDescription">
                        Регистрируй чеки из сети Пятерочка и&nbsp;чеки с новинками
                    </p>
                    <div
                        className="popup__chequeArea _FULL_W _COL _COL_H_CENTER _CLICK"
                        onClick={() => {
                            setStep('scan');
                        }}
                    >
                        <i className="popup__chequeAreaIcon">
                            <Icon name="scan" />
                        </i>
                        <p className="popup__chequeAreaDescription">
                            Нажми, чтобы
                            <br />
                            отсканировать QR-код с чека
                        </p>
                    </div>
                </div>
                <div className="popup__buttons _ROW">
                    <div className="popup__button _big">
                        <Button
                            onClick={() => {
                                setStep('form', 'typing');
                            }}
                            className="_purple"
                        >
                            Ввести данные <br className="_DESKTOP" />
                            вручную
                        </Button>
                    </div>
                    <div className="popup__button _big">
                        <Button label={true} onClick={() => undefined} className="_purple">
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                onChange={uploadQr}
                                style={{ display: 'none' }}
                            />
                            Загрузить фото
                            <br className="_DESKTOP" /> QR-кода
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

export default connect(mapStateToProps)(Start);
