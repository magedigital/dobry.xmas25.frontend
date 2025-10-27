import React from 'react';

import I from '../types.ts';

const renderTop: I['renderTop'] = function () {
    const { currentSection } = this.state;

    return (
        <div className="indexMap__top">
            {(Object.keys(this.sections) as (keyof typeof this.sections)[]).map((name) => {
                const section = this.sections[name];

                return (
                    <div
                        className={`indexMap__topSection _CLICK ${currentSection === name ? '_current' : ''}`}
                        key={name}
                        onClick={this.scrollToSection.bind(this, name, undefined)}
                        dangerouslySetInnerHTML={{ __html: section.title }}
                    ></div>
                );
            })}
        </div>
    );
};

export default renderTop;
