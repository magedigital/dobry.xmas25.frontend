import React from 'react';

import List from '@components/list/List.tsx';
import { CustomListenerT } from '@global/types.ts';

import errorHandler from './methods/errorHandler.ts';

import ErrorsI, { ErrorT } from './types.ts';

class Errors extends React.Component<ErrorsI['props'], ErrorsI['state']> implements ErrorsI {
    parent: ErrorsI['parent'];

    constructor(props: ErrorsI['props']) {
        super(props);
        this.state = {
            errors: [],
        };

        this.errorHandler = this.errorHandler.bind(this);

        this.parent = React.createRef();
    }

    timers = {};

    errorHandler = errorHandler;

    componentDidMount(): void {
        (document.addEventListener as CustomListenerT)('setError', this.errorHandler);
    }

    componentWillUnmount(): void {
        (document.removeEventListener as CustomListenerT)('setError', this.errorHandler);

        (Object.keys(this.timers) as (keyof typeof this.timers)[]).forEach((key) => {
            clearTimeout(this.timers[key]);
        });
    }

    render() {
        const { errors } = this.state;
        const renderKey = errors.map((error) => error._id).join('');

        return (
            <div ref={this.parent} className="errors">
                <List
                    renderKey={renderKey}
                    items={errors}
                    parentClass="errors__list"
                    itemClass="errors__listItem"
                    itemStyleProps={['top']}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    renderItem={({ item }: { item: ErrorT }) => (
                        <div className={`errors__item _${item.type}`}>{item.text}</div>
                    )}
                    resizeWidth={true}
                />
            </div>
        );
    }
}

export default Errors;
