import Question from "./Question";
import { useSelector } from 'react-redux';

const QuestionPage = ({ ques }) => {

    const { search, difficult } = useSelector((state) => state.question);

    const filteredQuestions = ques.filter(q => {
        const isNameMatch = !q.name || q.name.toLowerCase().includes(search.toLowerCase());
        const isSearchMatch = !search || Object.values(q).some(val => {
            if (typeof val === 'string') {
                return val.toLowerCase().includes(search.toLowerCase());
            }
            return false;
        });

        const isDifficultyMatch = !difficult || q.difficulty === difficult;

        return isNameMatch && isSearchMatch && isDifficultyMatch;
    });

    return (
        filteredQuestions.map((q, i) => {
            return (
                <Question ques={q} i={i} />
            )
        })
    )
}

export default QuestionPage;