import React from 'react';

import RootI from '../types.ts';

import Cheques from '../pages/cheques/Cheques.tsx';
import Index from '../pages/index/Index.tsx';
import Prizes from '../pages/prizes/Prizes.tsx';

const pages = {
    'profile-codes': {
        title: 'Коды',
        render(this: RootI) {
            const { data, content } = this.state;

            return (
                <Index
                    content={content}
                    data={data}
                    setRenderKey={this.setPagesRenderKey.bind(this)}
                />
            );
        },
    },
    'profile-cheques': {
        title: 'Акция в «Пятёрочке»',
        render(this: RootI) {
            const { data } = this.state;

            return <Cheques data={data} setRenderKey={this.setPagesRenderKey.bind(this)} />;
        },
    },
    'profile-prizes': {
        title: 'Призы',
        render(this: RootI) {
            const { data } = this.state;
            const { user } = this.props;

            return <Prizes user={user!} data={data} />;
        },
    },
} as const;

export default pages;
