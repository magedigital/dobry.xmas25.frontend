import React from 'react';

import Button from '@components/button/Button.tsx';
import Input from '@components/input/Input.tsx';
import changePage from '@functions/changePage.ts';

import addressHandler from './methods/addressHandler.ts';

import AddressPointI from './types.ts';

class AddressPoint
    extends React.Component<AddressPointI['props'], AddressPointI['state']>
    implements AddressPointI
{
    parent: AddressPointI['parent'];

    constructor(props: AddressPointI['props']) {
        super(props);
        this.state = {
            currentBlock: this.props.pointId || !this.props.pointAddress ? 'point' : 'manual',
            list: [],
        };

        this.parent = React.createRef();
    }

    addressHandler = addressHandler;

    componentDidMount(): void {
        const { pointAddress, pointId } = this.props;

        if (pointAddress && !pointId) {
            this.setState({ search: pointAddress });
        }
    }

    render() {
        const { currentBlock, list, search } = this.state;
        const { pointAddress, onChange, pageData, setPoint, pointId } = this.props;

        return (
            <div ref={this.parent} className="addressPoint _FULL_W">
                <div
                    className={`addressPoint__block _FULL_W _COL ${currentBlock === 'point' ? '_active' : ''}`}
                >
                    <p
                        className="addressPoint__title _CLICK"
                        onClick={() => {
                            if (currentBlock !== 'point' && setPoint) {
                                setPoint('0', undefined);
                            }

                            this.setState({ currentBlock: 'point' });
                        }}
                    >
                        <i className="addressPoint__point" />
                        Доставить в пункт выдачи:
                    </p>
                    <div className="addressPoint__left _COL">
                        <p className="addressPoint__address">
                            {pointId ? <>{pointAddress || '–'}</> : <></>}
                        </p>
                        <div className="addressPoint__button">
                            <Button
                                className="_pink _mediumSize"
                                onClick={() => {
                                    changePage({ pageName: 'anket-map', pageData });
                                }}
                            >
                                {pointAddress ? 'Выбрать другой пункт' : 'Выбрать пункт'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    className={`addressPoint__block _FULL_W _COL ${currentBlock === 'manual' ? '_active' : ''}`}
                >
                    <p
                        className="addressPoint__title _CLICK"
                        onClick={() => {
                            this.setState({ currentBlock: 'manual' });

                            if (setPoint) {
                                setPoint(undefined, undefined);
                            }
                        }}
                    >
                        <i className="addressPoint__point" />
                        Доставить почтой на адрес:
                    </p>
                    <div className="addressPoint__field _FULL_W">
                        <Input
                            value={search}
                            name=""
                            onChange={async (data) => {
                                await onChange({ value: data.value });
                                await this.addressHandler({ value: data.value });
                            }}
                            disabled={currentBlock !== 'manual'}
                        />
                        {list.length > 0 && (
                            <>
                                <div className="anketForm__fieldList _FULL_W">
                                    {list.map((item, key) => (
                                        <div
                                            className="anketForm__fieldListItem _CLICK"
                                            key={key}
                                            dangerouslySetInnerHTML={{ __html: item }}
                                            onClick={async () => {
                                                await this.addressHandler({
                                                    value: item,
                                                    choice: true,
                                                });
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddressPoint;
