import React from 'react';

import I from '../types.ts';

const renderCarusel: I['renderCarusel'] = function () {
    return (
        <div
            className="indexHeader__carusel"
            onMouseEnter={this.advanceRotate.bind(this, true)}
            onMouseLeave={this.advanceRotate.bind(this, false)}
        >
            <div className="indexHeader__caruselBack">
                <img
                    src={require('@media/karusel-1.png')}
                    alt=""
                    className="indexHeader__caruselBackImage"
                />
            </div>

            <div className="indexHeader__caruselTop"></div>
        </div>
    );
};

export default renderCarusel;
