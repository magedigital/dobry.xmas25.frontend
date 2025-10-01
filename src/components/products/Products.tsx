import React from 'react';
import { connect } from 'react-redux';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';
import Product from '@components/product/Product.tsx';
import changePage from '@functions/changePage.ts';

import getProducts from './methods/getProducts.ts';
import setProducts from './methods/setProducts.ts';
import sliderInit from './methods/sliderInit.ts';
import updateProducts from './methods/updateProducts.ts';

import ProductsI from './types.ts';

class Products
    extends React.Component<ProductsI['props'], ProductsI['state']>
    implements ProductsI
{
    parent: ProductsI['parent'];
    slider: ProductsI['slider'];

    constructor(props: ProductsI['props']) {
        super(props);
        this.state = {
            current: 0,
        };

        this.parent = React.createRef();
    }

    sliderInit = sliderInit;
    setProducts = setProducts;
    updateProducts = updateProducts;
    getProducts = getProducts;

    async componentDidMount() {
        this.sliderInit();
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        const { current, products } = this.state;
        const { is5ka } = this.props;
        const resultProducts = this.getProducts();

        return (
            <div
                ref={this.parent}
                className={`products _FULL_W _COL _COL_H_CENTER ${is5ka ? '_5ka' : ''}`}
            >
                <div className="products__slider _FULL_W">
                    <Media current="desktop">
                        {(['prev', 'next'] as const).map((key) => (
                            <div
                                className={`products__sliderButton _CLICK _COL _COL_CENTER _${key}`}
                                key={key}
                            >
                                <i className="products__sliderButtonIcon">
                                    <Icon name={key === 'prev' ? 'arrow-prev' : 'arrow-next'} />
                                </i>
                            </div>
                        ))}
                    </Media>
                    <div className="products__sliderInner _FULL_W">
                        <div className="products__sliderItems">
                            {resultProducts.map((product, key) => (
                                <div
                                    className="products__sliderItem products__sliderItemsItem"
                                    key={key}
                                ></div>
                            ))}
                        </div>
                        <div className="products__sliderReactItems">
                            {products?.map((product) => (
                                <div
                                    className={`products__sliderItem ${product.isCurrent ? '_current' : ''}`}
                                    key={product.id}
                                    data-id={product.id}
                                >
                                    <Product
                                        is5ka={is5ka}
                                        product={product}
                                        canSlider={!!product.isCurrent}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Media current="mobile">
                        <div className="products__sliderMobButtons _FULL_W _ROW _ROW_CENTER">
                            {(['prev', null, 'next'] as const).map((key) => {
                                if (key === null) {
                                    return (
                                        <div className="products__sliderMobItems" key={key}>
                                            {current + 1} / {this.props.products.length}
                                        </div>
                                    );
                                }

                                return (
                                    <div
                                        className={`products__sliderMobButton _CLICK _COL _COL_CENTER _${key}`}
                                        key={key}
                                        onClick={() => {
                                            if (this.slider) {
                                                this.slider.handlerButton({ dir: key });
                                            }
                                        }}
                                    >
                                        <Icon
                                            name={
                                                key === 'prev'
                                                    ? 'arrow-prev-long'
                                                    : 'arrow-next-long'
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </Media>
                </div>
                {!is5ka && (
                    <div className="products__button">
                        <Button
                            className="_purple"
                            onClick={() => {
                                changePage({ pageName: 'regCode' });
                            }}
                        >
                            Участвовать
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Products);
