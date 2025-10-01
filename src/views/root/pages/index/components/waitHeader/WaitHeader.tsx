import React from 'react';

import WaitHeaderI from './types.ts';

import getContent from './requests/getContent.ts';

class WaitHeader
    extends React.Component<WaitHeaderI['props'], WaitHeaderI['state']>
    implements WaitHeaderI
{
    parent: WaitHeaderI['parent'];

    constructor(props: WaitHeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getContent = getContent;

    componentDidMount(): void {
        this.getContent();
    }

    render() {
        const { days, daysTitle } = this.state;

        return (
            <div ref={this.parent} className={`indexWaitHeader _SECTION ${days ? '_ready' : ''}`}>
                <div className="indexWaitHeader__inner _INNER">
                    <div className="indexWaitHeader__actions">
                        <div className="indexWaitHeader__start _COL _COL_CENTER">
                            <div className="indexWaitHeader__startInner _COL _COL_H_CENTER">
                                {days}
                                <span>{daysTitle}</span>
                            </div>
                        </div>
                        <div className="indexWaitHeader__date _COL _COL_CENTER">
                            Дата старта:
                            <br />
                            <b>1 апреля 2025</b>
                        </div>
                    </div>
                    <div className="indexWaitHeader__foot _FULL_W _COL _COL_H_CENTER">
                        <div className="indexWaitHeader__footButton _CLICK _ROW _ROW_CENTER">
                            правила акции
                        </div>
                        <p className="indexWaitHeader__footText">
                            Общий срок проведения Акции с 01 апреля 2025 по 15 октября 2025.
                            Подробная информация об организаторе Акции, правилах ее проведения,
                            количестве призов по результатам Акции, сроках, месте и порядке их
                            получения указана на сайте dobrycola-promo.ru. Внешний вид товара и
                            призов может отличаться от изображения в рекламных материалах. Music
                            fest - Музыкальный фестиваль,
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WaitHeader;
