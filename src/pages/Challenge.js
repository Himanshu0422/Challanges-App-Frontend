import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import MainQuestion from '../components/MainQuestion';

const Challenge = () => {

    const { questionId } = useParams();
    const data = {
        questionId: questionId
    }
    const [ques, setQues] = useState();
    const questionData = async () => {
        try {
            const response = await axios.get('/v1/questionbyid', {
                params: data
            });
            setQues(response.data.data[0]);
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        questionData();
    }, [])

    return (
        <>
            <MainQuestion ques={ques} />
        </>
    )
}

export default Challenge