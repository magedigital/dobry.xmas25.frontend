import React from 'react';
import { connect } from 'react-redux';

import ProductsBlock from '@components/products/Products.tsx';
import { getLocalContent } from '@functions/localContent.ts';

import ProductsI from './types.ts';

import getContent from './requests/getContent.tsx';

class Products
    extends React.Component<ProductsI['props'], ProductsI['state']>
    implements ProductsI
{
    parent: ProductsI['parent'];

    constructor(props: ProductsI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('productsContent'),
        };

        this.parent = React.createRef();
    }

    getContent = getContent;

    componentDidMount(): void {
        this.getContent();
    }

    render() {
        const { content } = this.state;
        const products = content?.components.products || [];

        return (
            <div ref={this.parent} className="index5kaProducts _SECTION">
                {new Array(5).fill({}).map((item, key) => (
                    <div className={`index5kaProducts__decor _${key + 1}`} key={key} />
                ))}
                <div className="index5kaProducts__inner _INNER">
                    <div className="index5kaProducts__title">Продукты-участники</div>
                    <div className="index5kaProducts__content _FULL_W">
                        {new Array(6).fill({}).map((item, key) => (
                            <div
                                className={`index5kaProducts__contentDecor _${key + 1}`}
                                key={key}
                            />
                        ))}
                        {content && <ProductsBlock products={products} is5ka={true} />}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Products);
