import React from 'react';

export default interface IRoute {
	path: string,
	exact: boolean,
	component: React.ComponentType<any>
}
