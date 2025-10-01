import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const widgetInit: I['widgetInit'] = async function () {
    const { storePages } = this.props;
    const fivepost = window.fivepost;

    this.fivepost = new fivepost.PickupPointsMap({
        apikey: '8ec9eb6f-7c2f-42c0-8497-ea694df5edd6',
        target: '#map',
        onSelectPoint: (point: { id: string; fullAddress: string }) => {
            changePage({
                pageName: 'full-anket',
                pageData: {
                    pointId: point.id,
                    pointAddress: point.fullAddress,
                    anket: { ...storePages['anket-map'].data },
                },
            });
        },
        onLoadYandexApi: () => undefined,
        onInit: () => undefined,
        onCancel: (point: any) => {
            console.log('canceled', point);
        },
    });
};

export default widgetInit;
