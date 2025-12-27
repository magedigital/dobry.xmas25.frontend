import React from 'react';

import LoaderBlock from '@components/loaderBlock/LoaderBlock.tsx';

import setFrame from './methods/setFrame.ts';
import videoStart from './methods/videoStart.ts';
import videoStop from './methods/videoStop.ts';

import ChequeScanI from './types.ts';

class ChequeScan
    extends React.Component<ChequeScanI['props'], ChequeScanI['state']>
    implements ChequeScanI
{
    parent: ChequeScanI['parent'];
    video: ChequeScanI['video'];

    constructor(props: ChequeScanI['props']) {
        super(props);
        this.state = {};

        this.video = React.createRef();
        this.parent = React.createRef();
    }

    videoStop = videoStop;
    videoStart = videoStart;
    setFrame = setFrame;

    componentDidMount() {
        this.videoStart();
    }

    componentWillUnmount() {
        this.videoStop();
    }

    render() {
        return (
            <div ref={this.parent} className="popup__block _COL _COL_H_CENTER">
                <div className="popup__scan">
                    <video ref={this.video} className="popup__scanVideo" playsInline muted />
                    <LoaderBlock
                        className="popup__scanLoader"
                        isShow={true}
                        loaderClassName=""
                    />
                    <canvas hidden />
                </div>
            </div>
        );
    }
}

export default ChequeScan;
