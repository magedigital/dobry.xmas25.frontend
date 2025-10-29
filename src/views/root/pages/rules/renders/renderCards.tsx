import React from 'react';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderCards: I['renderCards'] = function () {
    const { content } = this.state;

    return (
        <div className="rules _COL _COL_H_CENTER _FULL_W">
            <div className="rules__cards">
                {content?.components.howto.steps.map((step, key) => {
                    const { title, description, thumb } = step;

                    return (
                        <div className="rules__card" key={key}>
                            {key !== this.cards.length - 1 && (
                                <i className="rules__cardNext">
                                    <Icon name="card-next" />
                                </i>
                            )}
                            <div className="rules__cardHead _FULL_W">
                                <img src={thumb} alt="" className="rules__cardImage" />
                                <div className="rules__cardNumber _COL _COL_CENTER">{key + 1}</div>
                            </div>
                            <div className="rules__cardContent _FULL_W _COL">
                                <div className="rules__cardTitle">{title}</div>
                                <p
                                    className="rules__cardDescription"
                                    dangerouslySetInnerHTML={{ __html: description }}
                                ></p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="rules__button">
                <Button
                    onClick={() => {
                        changePage({ pageName: 'regCode' });
                    }}
                    className="_white"
                >
                    Участвовать
                </Button>
            </div>
        </div>
    );
};

export default renderCards;
