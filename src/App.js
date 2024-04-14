import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Question from "./pages/Question";
import ContributedQuestion from "./pages/ContributedQuestion";
import Challenges from "./pages/Challenges";
import ChallengesIntro from "./pages/Challenges/ChallengesIntro";
import TopicQues from "./pages/Challenges/TopicQues";
import Challenge from "./pages/Challenge";
import QuestionTable from "./pages/QuestionTable";

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
							<Home />
						}
					/>
					<Route
						exact
						path="/question"
						element={
							<Question />
						}
					/>
					<Route
						exact
						path="/contribute"
						element={
							<ContributedQuestion />
						}
					/>
					<Route
						exact
						path="/challenges"
						element={
							<Challenges />
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
							<Challenge />
						}
					/>
					<Route
						exact
						path="/table"
						element={
							<QuestionTable />
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
