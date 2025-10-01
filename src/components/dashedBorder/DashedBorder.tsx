import React from 'react';

import DashedBorderI from './types.ts';

class DashedBorder
    extends React.Component<DashedBorderI['props'], DashedBorderI['state']>
    implements DashedBorderI
{
    parent: DashedBorderI['parent'];
    throttleHandler: DashedBorderI['throttleHandler'];

    constructor(props: DashedBorderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState({ isInit: true });
        }, 10);
    }

    render() {
        const { isInit } = this.state;
        const { className } = this.props;

        return (
            <div ref={this.parent} className={`dashedBorder ${className || ''}`}>
                <svg width="100%" height="100%" className="dashedBorder__svg">
                    <rect
                        className="dashedBorder__rect"
                        rx={18}
                        ry={18}
                        fill="none"
                        style={isInit ? { display: 'block' } : {}}
                    />
                </svg>
            </div>
        );
    }
}

export default DashedBorder;
