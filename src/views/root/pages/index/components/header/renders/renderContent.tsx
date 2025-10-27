import React from 'react';

import Button from '@components/button/Button.tsx';
import scrollToBlock from '@functions/scrollToBlock.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div className="indexHeader__content _COL">
            <p className="indexHeader__contentSupport">Добро пожаловать в</p>
            <div className="indexHeader__contentTitle" />
            <p className="indexHeader__contentText">
                С 01 ноября 2025 по 17 января 2026 исследуй Добрый Лосьвилль, регистрируй коды с
                продукцией Добрый, выиграй миллион на&nbsp;волшебный Новый год и другие призы!
            </p>
            <div className="indexHeader__contentButton">
                <Button
                    className="_indexHeader _bigSize"
                    onClick={() => {
                        scrollToBlock({
                            blockNode: document.querySelector('.indexMap') as HTMLElement,
                            scrollNode: this.parent.current!.closest(
                                '.publicPage__inner',
                            ) as HTMLElement,
                            offset: -50,
                        });
                    }}
                >
                    Отправиться в Добрый Лосьвилль
                </Button>
            </div>
        </div>
    );
};

export default renderContent;
