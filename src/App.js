import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
  } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Register from "./pages/Register";
  

function App() {
	return (
		<div>
			<Router>
				<Toaster position="top-center" reverseOrder={false} />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
					<Route
						exact
						path="/register"
						element={<Register />}
					/>
				</Routes>
			</Router>
    	</div>
	);
}

export default App;
