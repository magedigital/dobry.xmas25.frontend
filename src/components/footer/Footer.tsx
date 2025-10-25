import React from 'react';
import { connect } from 'react-redux';

import Link from '@components/link/Link.tsx';
import setSpacesInText from '@functions/setSpacesInText.ts';
import { StoreT } from '@global/types.ts';

import FooterI from './types.ts';

class Footer extends React.Component<FooterI['props'], FooterI['state']> implements FooterI {
    parent: FooterI['parent'];

    constructor(props: FooterI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    componentDidMount(): void {
        const { storePages } = this.props;
        const is5ka = !!storePages['5ka'].isShow;

        this.setState({ is5ka });
    }

    render() {
        const { is5ka } = this.state;
        const { content } = this.props;
        const text = content?.[is5ka ? 'disclaimer_5ka' : 'disclaimer']?.description;

        return (
            <div ref={this.parent} className={`footer _SECTION ${is5ka ? '_5ka' : ''}`}>
                <div className="footer__inner _INNER">
                    <div className="footer__nav _ROW">
                        <Link pageName="faq" className="footer__navItem _CLICK">
                            обратная связь
                        </Link>
                        <a
                            href={content?.url2.url}
                            className="footer__navItem _CLICK"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {content?.url2.title}
                        </a>
                        <a
                            href={content?.[is5ka ? 'url3_5ka' : 'url3'].url}
                            className="footer__navItem _CLICK"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {content?.[is5ka ? 'url3_5ka' : 'url3'].title}
                        </a>
                    </div>
                    <div
                        className="footer__content"
                        dangerouslySetInnerHTML={{ __html: setSpacesInText(text) }}
                    ></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        storePages: state.pages,
    };
}

export default connect(mapStateToProps)(Footer);
