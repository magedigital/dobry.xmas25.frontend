import { StoreT } from '@global/types';

const pages = [
    {
        links: ['', undefined],
        name: 'index',
        content: 'Главная',
    },
    {
        links: ['404'],
        name: '404',
    },
    {
        links: ['5ka'],
        name: '5ka',
    },
    {
        links: ['cheque'],
        name: 'cheque',
        content: 'Регистрация чека с новинкой',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['rules'],
        name: 'rules',
        content: 'Правила Акции',
    },
    {
        links: ['raffle-prize'],
        name: 'raffle-prize',
        content: 'Роызыгрыш',
    },
    {
        links: ['prizes'],
        name: 'prizes',
        content: 'Призы',
    },
    {
        links: ['', undefined, 'moment'],
        name: 'prizes-moment',
        level: 1,
        parentName: 'prizes',
    },
    {
        links: ['balls'],
        name: 'prizes-balls',
        level: 1,
        parentName: 'prizes',
    },
    {
        links: ['week'],
        name: 'prizes-week',
        level: 1,
        parentName: 'prizes',
    },
    {
        links: ['spec'],
        name: 'prizes-spec',
        level: 1,
        parentName: 'prizes',
    },
    {
        links: ['main'],
        name: 'prizes-main',
        level: 1,
        parentName: 'prizes',
    },
    {
        links: ['winners'],
        name: 'winners',
        content: 'Победители',
    },
    {
        links: ['faq'],
        name: 'faq',
        content: 'Вопрос-ответ',
    },
    {
        links: ['faq-5ka'],
        name: 'faq-5ka',
        content: 'Вопрос-ответ',
    },
    {
        links: ['products'],
        name: 'products',
        content: 'Продукты-участники',
    },
    {
        links: ['anket'],
        name: 'anket',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['act'],
        name: 'akt',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: [],
        name: 'akt-inner',
        level: 1,
        parentName: 'akt',
    },
    {
        links: ['full-anket'],
        name: 'full-anket',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['anket-map'],
        name: 'anket-map',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['profile'],
        name: 'profile',
        getCond: ({ user }: StoreT) => ({
            condition:
                !!user &&
                user.status !== 'EMAIL_CONFIRM_REQUIRED' &&
                user.status !== 'EXTRA_ANKET_REQUIRED',
        }),
        getRedirect: ({ user }: StoreT) => {
            if (user?.status === 'EMAIL_CONFIRM_REQUIRED') {
                return { name: 'auth-reg' };
            }

            if (user?.status === 'EXTRA_ANKET_REQUIRED') {
                return { name: 'full-anket' };
            }

            return { name: 'auth' };
        },
    },
    {
        links: ['', undefined, 'codes'],
        name: 'profile-codes',
        level: 1,
        parentName: 'profile',
    },
    {
        links: ['cheques'],
        name: 'profile-cheques',
        level: 1,
        parentName: 'profile',
    },
    {
        links: ['prizes'],
        name: 'profile-prizes',
        level: 1,
        parentName: 'profile',
    },
    {
        links: ['balls'],
        name: 'balls',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['invite'],
        name: 'invite',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['reg-code'],
        name: 'regCode',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['merch'],
        name: 'merch',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['raffle'],
        name: 'raffle',
        getCond: ({ user }: StoreT) => ({
            condition: !!user,
        }),
        getRedirect: () => ({ name: 'auth' }),
    },
    {
        links: ['auth'],
        name: 'auth',
        getCond: ({ user, loginProcess }: StoreT) => ({
            condition: !user || user.status === 'EMAIL_CONFIRM_REQUIRED' || loginProcess,
        }),
        getRedirect: () => ({ name: 'profile' }),
    },
    {
        links: ['', undefined],
        name: 'auth-login',
        level: 1,
        parentName: 'auth',
        getCond: ({ user, loginProcess }: StoreT) => ({
            condition: !user || loginProcess,
        }),
        getRedirect: () => ({ name: 'profile' }),
    },
    {
        links: ['reg'],
        name: 'auth-reg',
        level: 1,
        parentName: 'auth',
    },
    {
        links: ['game'],
        name: 'game',
    },
    {
        links: [],
        name: 'game-inner',
        level: 1,
        parentName: 'game',
    },
    {
        links: ['feduk-prize'],
        name: 'fedukPrize',
    },
] as const;

export default pages;
