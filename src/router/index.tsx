import Loadable from 'react-loadable';
import * as React from 'react';

const loadingComponet = ({error, pastDelay} : {error: any, pastDelay: any}) => {
	if (error) {
	return <div>error!!!!!</div>;
	} else if (pastDelay) {
		return <div />;
	} else {
		return null;
	}
};

let config = [
	{
		name: '/',
		path: '/',
		exact: true,
		component: Loadable({
			loader: () => import('../component/home/index'),
			loading: loadingComponet,
			delay: 200,
		}),
	},
	{
		name: 'articles',
		path: '/articles',
		exact: true,
		component: Loadable({
			loader: () => import('../component/articles/index'),
			loading: loadingComponet,
			delay: 200,
		}),
	},
	{
		name: 'archive',
		path: '/archive',
		exact: true,
		component: Loadable({
			loader: () => import('../component/archive/index'),
			loading: loadingComponet,
			delay: 200,
		}),
	}
];

export default config;