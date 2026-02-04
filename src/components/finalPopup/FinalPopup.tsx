import React from 'react';
import { connect } from 'react-redux';

import Icon from '@components/icon/Icon.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { StoreT } from '@global/types.ts';

import FinalPopupI from './types.ts';

class FinalPopup
    extends React.Component<FinalPopupI['props'], FinalPopupI['state']>
    implements FinalPopupI
{
    parent: FinalPopupI['parent'];

    constructor(props: FinalPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="finalPopup">
                <div className="finalPopup__wrapper">
                    <div className="finalPopup__inner">
                        <div
                            className="finalPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('finalPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="finalPopup__innerBox">
                            <h3 className="finalPopup__title">
                                Кампания завершена, но не добрые дела!
                            </h3>
                            <div className="finalPopup__footer _COL">
                                <div className="finalPopup__footerContent">
                                    {[
                                        'Благодаря вам кампания стала <span class="_NOWRAP">по-настоящему</span> доброй. Напомним, что&nbsp;все участники могли обменивать свои баллы на сертификаты на дополнительные занятия с репетиторами для подготовки выпускников детских домов к экзаменам ЕГЭ или ОГЭ.',
                                        'Мы вдохновлены вашим активным участием и решили конвертировать все оставшиеся неиспользованные баллы в дополнительное пожертвование в адрес фонда «Наставники детям». Эти&nbsp;средства также пойдут на оплату занятий с репетиторами для выпускников детских домов.',
                                        'Таким образом наш общий вклад заметно увеличится — до конца учебного года выпускники детских домов пройдут 5400 занятий с опытными репетиторами и смогут подтянуть свои знания по русскому языку и математике. Результаты программы и отчет о реализации пожертвования будет размещен <a href="https://www.nastavniki.org/campaign/rastimdobro_repetitory/" target="_blank">на сайте Фонда.</a>',
                                    ].map((p) => (
                                        <p
                                            key={p}
                                            dangerouslySetInnerHTML={{ __html: setSpacesInText(p) }}
                                        ></p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        collectionPopup: state.collectionPopup,
    };
}

export default connect(mapStateToProps)(FinalPopup);
