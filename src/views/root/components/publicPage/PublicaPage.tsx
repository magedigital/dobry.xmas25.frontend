import React from 'react';

import getLocalScrollName from './methods/getLocalScrollName.ts';
import scrollHandler from './methods/scrollHandler.ts';
import setStartScroll from './methods/setStartScroll.ts';

import PublicPageI from './types.ts';

import renderPage from './renders/renderPage.tsx';

class PublicPage<P = {}, S = {}>
    extends React.Component<PublicPageI<P, S>['props'], PublicPageI<P, S>['state']>
    implements PublicPageI<P, S>
{
    parent: PublicPageI['parent'];
    scrollNode: PublicPageI['scrollNode'];

    constructor(props: PublicPageI<P, S>['props']) {
        super(props);
        this.state = {} as PublicPageI<P, S>['state'];

        this.scrollHandler = this.scrollHandler.bind(this);

        this.scrollNode = React.createRef();
        this.parent = React.createRef();
    }

    name = '';
    scrollGoals = {};

    getLocalScrollName = getLocalScrollName;
    setStartScroll = setStartScroll;
    scrollHandler = scrollHandler;

    renderPage = renderPage;

    componentDidMount(): void {
        this.setStartScroll();
    }
}

export default PublicPage;
