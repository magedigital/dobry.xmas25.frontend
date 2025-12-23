import React from 'react';

import RootI from '../types.ts';

import Pyterka from '../pages/5ka/Pyterka.tsx';
import Akt from '../pages/akt/Akt.tsx';
import AlphaPrize from '../pages/alphaPrize/AlphaPrize.tsx';
import Anket from '../pages/anket/Anket.tsx';
import AnketMap from '../pages/anketMap/AnketMap.tsx';
import Auth from '../pages/auth/Auth.tsx';
import Balls from '../pages/balls/Balls.tsx';
import Cheque from '../pages/cheque/Cheque.tsx';
import ContestWinners from '../pages/contestWinners/ContestWinners.tsx';
import Faq from '../pages/faq/Faq.tsx';
// import FedukPrize from '../pages/fedukPrize/FedukPrize.tsx';
import FullAnket from '../pages/fullAnket/FullAnket.tsx';
import Game from '../pages/game/Game.tsx';
import Index from '../pages/index/Index.tsx';
import Invite from '../pages/invite/Invite.tsx';
import Merch from '../pages/merch/Merch.tsx';
import Prizes from '../pages/prizes/Prizes.tsx';
import Products from '../pages/products/Products.tsx';
import Profile from '../pages/profile/Profile.tsx';
import PromoterPrize from '../pages/promoterPrize/PromoterPrize.tsx';
import RafflePrize from '../pages/rafflePrize/RafflePrize.tsx';
import RegCode from '../pages/regCode/RegCode.tsx';
import Rules from '../pages/rules/Rules.tsx';
import Winners from '../pages/winners/Winners.tsx';

const pages = {
    index: {
        render(this: RootI) {
            return <Index />;
        },
    },
    anket: {
        render(this: RootI) {
            return <Anket />;
        },
    },
    akt: {
        render(this: RootI) {
            return <Akt />;
        },
    },
    'full-anket': {
        render(this: RootI) {
            return <FullAnket />;
        },
    },
    'anket-map': {
        render(this: RootI) {
            return <AnketMap />;
        },
    },
    'raffle-prize': {
        render(this: RootI) {
            return <RafflePrize />;
        },
    },
    'alpha-prize': {
        render(this: RootI) {
            return <AlphaPrize />;
        },
    },
    faq: {
        render(this: RootI) {
            return <Faq />;
        },
    },
    'faq-5ka': {
        render(this: RootI) {
            return <Faq is5ka={true} />;
        },
    },
    winners: {
        render(this: RootI) {
            return <Winners />;
        },
    },
    contestWinners: {
        render(this: RootI) {
            return <ContestWinners />;
        },
    },
    rules: {
        render(this: RootI) {
            return <Rules />;
        },
    },
    profile: {
        render(this: RootI) {
            return <Profile />;
        },
    },
    balls: {
        render(this: RootI) {
            return <Balls />;
        },
    },
    invite: {
        render(this: RootI) {
            return <Invite />;
        },
    },
    regCode: {
        render(this: RootI) {
            return <RegCode />;
        },
    },
    cheque: {
        render(this: RootI) {
            return <Cheque />;
        },
    },
    products: {
        render(this: RootI) {
            return <Products />;
        },
    },
    prizes: {
        render(this: RootI) {
            return <Prizes />;
        },
    },
    merch: {
        render(this: RootI) {
            return <Merch />;
        },
    },
    '5ka': {
        render(this: RootI) {
            return <Pyterka />;
        },
    },
    auth: {
        render(this: RootI) {
            return <Auth />;
        },
    },
    game: {
        render(this: RootI) {
            return <Game />;
        },
    },
    'promoter-prize': {
        render(this: RootI) {
            return <PromoterPrize />;
        },
    },
    // fedukPrize: {
    //     render(this: RootI) {
    //         return <FedukPrize />;
    //     },
    // },
} as const;

export default pages;
