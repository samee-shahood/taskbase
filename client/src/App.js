import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Dashboard from './components/dashboard.component';
import Login from './components/login.component';


function App() {
  return (
	<BrowserRouter>

		<div className="App">
			<Route component={Dashboard} path="/" exact />
			<Route component={Login} path="/login" exact />
		</div>
	</BrowserRouter>

  );
}

export default App;
