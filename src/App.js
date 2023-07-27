import {
	BrowserRouter as Router,
	Route,
	Routes,
  } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Question from "./pages/Question";
import ContributedQuestion from "./pages/ContributedQuestion";
import Challenges from "./pages/Challenges";
  

function App() {
	
	return (
		<div>
			<Router>
				<Toaster position="top-center" reverseOrder={false} />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/register"
						element={
							<PublicRoute>
								<Register />
							</PublicRoute>
						}
					/>
					<Route
						exact
						path="/login"
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						exact
						path="/question"
						element={
							<ProtectedRoute>
								<Question />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/contribute"
						element={
							<ProtectedRoute>
								<ContributedQuestion />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/challenges"
						element={
							<ProtectedRoute>
								<Challenges />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
    	</div>
	);
}

export default App;
