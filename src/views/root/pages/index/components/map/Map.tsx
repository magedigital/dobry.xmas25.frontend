import { throttle } from 'throttle-debounce';

import React from 'react';

import scrollHandler from './methods/scrollHandler.ts';
import scrollToSection from './methods/scrollToSection.ts';

import MapI from './types.ts';

import renderBack from './renders/renderBack.tsx';
import renderDecors from './renders/renderDecors.tsx';
import renderMarkets from './renders/renderMarkets.tsx';
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
    renderMarkets = renderMarkets;

    componentDidMount(): void {
        setTimeout(() => {
            const scrollNode = this.props.getScrollNode();

            if (scrollNode) {
                scrollNode.addEventListener('scroll', this.scrollThrottle);
                scrollNode.dispatchEvent(new Event('scroll'));
            }

            const query = window.location.search.slice(1);

            if (query.includes('ancor')) {
                const ancor = query
                    .split('&')
                    .find((item) => item.split('=')[0] === 'ancor')
                    ?.split('=')[1] as keyof typeof this.sections;

                if (ancor) {
                    this.scrollToSection(ancor, 0);
                }
            }
        }, 100);

        const navItems = document.querySelectorAll('.indexMap__navItem');

        navItems.forEach((navItem) => {
            const snowContainer = navItem.querySelector('.indexMap__snowContainer') as HTMLElement;

            if (!snowContainer) return;

            // Флаг, чтобы избежать множественного создания при быстром наведении
            let isAnimatingOut = false;

            navItem.addEventListener('mouseenter', () => {
                if (isAnimatingOut) {
                    // Если идёт анимация исчезновения, отменим её
                    snowContainer.style.opacity = '1';
                    isAnimatingOut = false;
                }

                // Удалим старые снежинки (на всякий случай)
                snowContainer.innerHTML = '';

                // Создаём 30 новых снежинок
                for (let i = 0; i < 20; i++) {
                    const snowflake = document.createElement('div');
                    snowflake.classList.add('indexMap__snowflake');
                    snowContainer.appendChild(snowflake);
                }

                // Плавное появление
                snowContainer.style.opacity = '1';
            });

            navItem.addEventListener('mouseleave', () => {
                isAnimatingOut = true;
                snowContainer.style.opacity = '0';
            });

            // После завершения анимации исчезновения — удаляем снежинки
            snowContainer.addEventListener('transitionend', () => {
                if (snowContainer.style.opacity === '0') {
                    snowContainer.innerHTML = ''; // удаляем все дочерние элементы
                    isAnimatingOut = false;
                }
            });
        });
    }

    componentWillUnmount(): void {
        const scrollNode = this.props.getScrollNode();

        if (scrollNode) {
            scrollNode.removeEventListener('scroll', this.scrollThrottle);
        }
    }

    render() {
        return (
            <div
                ref={this.parent}
                className="indexMap _SECTION"
                onTouchStart={() => {
                    this.setState({ currentHoverItem: undefined });
                }}
            >
                <div className="indexMap__inner">
                    <div className="indexMap__content _COL _COL_H_CENTER">
                        {this.renderTop()}
                        {this.renderDecors()}
                        {this.renderBack()}
                        {this.renderNav()}
                    </div>
                    {this.renderMarkets()}
                </div>
            </div>
        );
    }
}

export default Map;
