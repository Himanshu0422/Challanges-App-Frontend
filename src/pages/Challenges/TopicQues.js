import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import QuestionPage from '../../components/QuestionPage';

const TopicQues = ({ topic }) => {

    const data = {
        topic: topic,
    }
    const [ques, setQues] = useState([]);

    const getQues = async () => {
        try {
            const response = await axios.get('/v1/question', {
                params: data
            });
            setQues(response.data.data);
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    useEffect(() => {
        getQues();
    }, [ques]);

    return (
        <div className='flex flex-wrap justify-evenly h-[100%] w-[100%] overflow-auto'>
            <QuestionPage ques={ques} />
        </div>
    )
}

export default TopicQues;