import * as ReactBootStrap from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Dashboard from './components/dashboard.component';
import Login from './components/login.component';
import Register from './components/register.component';
import Footer from './components/footer.component';




function App() {
  return (
	<HashRouter>
		<div className="App">
			<Switch>
				<Route component={Dashboard} path="/" exact />
				<Route component={Login} path="/login" exact />
				<Route component={Register} path="/register" exact />
			</Switch>
			<br/>
			<br/>
		</div>
		<Footer/>
	</HashRouter>

  );
}

export default App;
