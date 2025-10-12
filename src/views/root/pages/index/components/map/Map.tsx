import { throttle } from 'throttle-debounce';

import React from 'react';

import scrollHandler from './methods/scrollHandler.ts';
import scrollToSection from './methods/scrollToSection.ts';

import MapI from './types.ts';

import renderBack from './renders/renderBack.tsx';
import renderDecors from './renders/renderDecors.tsx';
import renderNav from './renders/renderNav.tsx';
import renderTop from './renders/renderTop.tsx';
import { mapNav } from './static/nav.ts';
import { mapSections } from './static/sections.ts';

class Map extends React.Component<MapI['props'], MapI['state']> implements MapI {
    parent: MapI['parent'];
    scrollThrottle: MapI['scrollThrottle'];

    constructor(props: MapI['props']) {
        super(props);
        this.state = {
            currentSection: 'main',
        };

        this.scrollThrottle = throttle(300, this.scrollHandler.bind(this));

        this.parent = React.createRef();
    }

    currentSection = 'main' as const;

    nav = mapNav;
    sections = mapSections;

    scrollHandler = scrollHandler;
    scrollToSection = scrollToSection;

    renderTop = renderTop;
    renderNav = renderNav;
    renderBack = renderBack;
    renderDecors = renderDecors;

    componentDidMount(): void {
        setTimeout(() => {
            const scrollNode = this.props.getScrollNode();

            if (scrollNode) {
                scrollNode.addEventListener('scroll', this.scrollThrottle);
                scrollNode.dispatchEvent(new Event('scroll'));
            }
        }, 100);
    }

    componentWillUnmount(): void {
        const scrollNode = this.props.getScrollNode();

        if (scrollNode) {
            scrollNode.removeEventListener('scroll', this.scrollThrottle);
        }
    }

    render() {
        return (
            <div ref={this.parent} className="indexMap _SECTION">
                <div className="indexMap__inner">
                    <div className="indexMap__content _COL _COL_H_CENTER">
                        {this.renderTop()}
                        {this.renderDecors()}
                        {this.renderBack()}
                        {this.renderNav()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;
