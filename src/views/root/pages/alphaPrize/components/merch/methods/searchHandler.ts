import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const searchHandler: I['searchHandler'] = async function ({ value }) {
    const { festNaming, customCallback, setLoading } = this.props;
    const resultValue = value.slice(0, 10).replace(/\s/gi, '');

    if (this.checkTimerId) {
        clearTimeout(this.checkTimerId);
    }

    await this.change({ search: resultValue });

    const defaultItem = festNaming.find((item) => item.title === 'default');

    if (!defaultItem) {
        return;
    }

    await setLoading(true, undefined);

    const resultItems = [];

    if (resultValue.length) {
        const parseItems = festNaming
            .filter(
                (item) =>
                    item.title !== 'default' &&
                    Array.from(
                        item.title.matchAll(
                            new RegExp(
                                `^${resultValue.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')}`,
                                'gi',
                            ),
                        ),
                    ).length,
            )
            .map((item) => item.description)
            .join('\r\n')
            .split('\r\n');

        resultItems.push(...parseItems.filter((item) => item));
        resultItems.push(
            ...defaultItem.description
                .split('\r\n')
                .map((item) => item.replace('{{NAME}}', resultValue)),
        );
    } else {
        resultItems.push('');
    }

    await setAsyncState.call(this, { items: resultItems });

    this.sliderInit();

    customCallback(resultItems[0] || undefined);

    this.checkTimerId = setTimeout(async () => {
        await this.checkName(resultValue);
    }, 100);
};

export default searchHandler;
