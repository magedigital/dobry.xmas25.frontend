import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import CheckboxI from './types.ts';

class Checkbox
    extends React.Component<CheckboxI['props'], CheckboxI['state']>
    implements CheckboxI
{
    parent: CheckboxI['parent'];

    constructor(props: CheckboxI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { children, value, onChange } = this.props;

        return (
            <label className="checkbox">
                <input
                    type="checkbox"
                    className="checkbox__input"
                    checked={value}
                    onChange={() => {
                        onChange({ value: !value });
                    }}
                />
                <div className="checkbox__view">
                    <div className="checkbox__box _COL _COL_CENTER">
                        <i className="checkbox__boxIcon">
                            <Icon name="check" />
                        </i>
                    </div>
                    {typeof children === 'string' ? (
                        <div
                            className="checkbox__viewInner"
                            dangerouslySetInnerHTML={{ __html: children }}
                        ></div>
                    ) : (
                        <div className="checkbox__viewInner">{children}</div>
                    )}
                </div>
            </label>
        );
    }
}

export default Checkbox;
