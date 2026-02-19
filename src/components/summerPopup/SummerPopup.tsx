import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import handlerPopup from '@functions/handlerPopup.ts';
import AxiosInst from '@functions/initAxios.ts';

import SummerPopupI from './types.ts';

class SummerPopup
    extends React.Component<SummerPopupI['props'], SummerPopupI['state']>
    implements SummerPopupI
{
    parent: SummerPopupI['parent'];

    constructor(props: SummerPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    async getData() {
        try {
            const r = await AxiosInst.get('/content/soon/');

            const counter = r.data.components?.counter as {
                days: string;
                daysTitle: string;
            };

            this.setState({ days: counter?.days, daysTitle: counter?.daysTitle });
        } catch (error) {}
    }

    componentDidMount(): void {
        this.getData();
    }

    render() {
        const { days, daysTitle } = this.state;

        return (
            <div ref={this.parent} className={`summerPopup ${days ? '_ready' : ''}`}>
                <div className="summerPopup__wrapper">
                    <div className="summerPopup__inner">
                        <div
                            className="summerPopup__close _CLICK"
                            onClick={() => {
                                handlerPopup('summerPopup', { isShow: false });
                            }}
                        >
                            <Icon name="close" />
                        </div>
                        <div className="summerPopup__innerBox _COL">
                            <div className="summerPopup__title">
                                <span>Дата старта акции:</span>&nbsp;&nbsp;
                                <br className="_MOBILE" />1 апреля 2026
                            </div>
                            <div className="summerPopup__timer _COL _COL_CENTER">
                                <p className="summerPopup__timerSupport">до старта:</p>
                                <p className="summerPopup__timerDay">{days}</p>
                                <p className="summerPopup__timerSupport _main">{daysTitle}</p>
                            </div>
                            <img
                                src={require('@media/summer/slogan.svg').default}
                                alt=""
                                className="summerPopup__slogan"
                            />
                            <div className="summerPopup__footer">
                                <div className="summerPopup__footerButton _CLICK">
                                    Правила акции
                                </div>
                                <p className="summerPopup__footerText">
                                    Общий срок проведения Акции с 01.04.2026 по 15.10.2026.
                                    Подробная информация об организаторе Акции, правилах ее
                                    проведения, количестве призов по результатам Акции, сроках,
                                    месте и порядке их получения указана на сайте
                                    dobrycola-promo.ru. Внешний вид товара и призов может отличаться
                                    от изображения в рекламных материалах. Pop sound – Звук в стиле
                                    поп-музыки. K-pop sound – Звук в стиле корейской поп-музыки.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SummerPopup;
