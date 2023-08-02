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
import ChallengesIntro from "./pages/Challenges/ChallengesIntro";
import TopicQues from "./pages/Challenges/TopicQues";
import Challenge from "./pages/Challenge";

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
						<Route path="/challenges/hooks" element={<TopicQues topic='Hooks' />} />
						<Route path="/challenges/router" element={<TopicQues topic='Router' />} />
						<Route path="/challenges/custom-hooks" element={<TopicQues topic='CustomHooks' />} />
						<Route path="/challenges/context-api" element={<TopicQues topic='ContextApi' />} />
						<Route path="/challenges/debugging" element={<TopicQues topic='Debugging' />} />
						<Route path="/challenges/portals" element={<TopicQues topic='Portals' />} />
					</Route>
					<Route
						exact
						path="/challenge/:questionId"
						element={
							<ProtectedRoute>
								<Challenge />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
    	</div>
	);
}

export default App;
