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
import Hooks from "./pages/Challenges/Hooks";
import RouterQues from "./pages/Challenges/RouterQues";
import CustomHooks from "./pages/Challenges/CustomHooks";
import ContextApi from "./pages/Challenges/ContextApi";
import Debugging from "./pages/Challenges/Debugging";
import Portals from "./pages/Challenges/Portals";
import ChallengesIntro from "./pages/Challenges/ChallengesIntro";

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
					>
						<Route path="/challenges" element={<ChallengesIntro />} />
						<Route path="/challenges/hooks" element={<Hooks />} />
						<Route path="/challenges/router" element={<RouterQues />} />
						<Route path="/challenges/custom-hooks" element={<CustomHooks />} />
						<Route path="/challenges/context-api" element={<ContextApi />} />
						<Route path="/challenges/debugging" element={<Debugging />} />
						<Route path="/challenges/portals" element={<Portals />} />
					</Route>
				</Routes>
			</Router>
    	</div>
	);
}

export default App;
