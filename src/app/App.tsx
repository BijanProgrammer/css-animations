import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';

import IRoute from './models/IRoute';

import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';

const routes: IRoute[] = [];

function App() {
	return (
		<Router>
			<div id="app">
				<Header/>
				
				<main>
					<Switch>
						{
							routes.forEach(route => (
								<Route path={`/gallery`} exact={route.exact} component={route.component}/>
							))
						}
						
						<Route path="/gallery" component={Gallery}/>
						<Route exact path="/" component={Home}/>
						<Route component={NotFound}/>
					</Switch>
				</main>
				
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
