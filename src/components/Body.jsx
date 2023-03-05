import { useEffect, useState } from 'react';
import axios from 'axios';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

import { API_URL, QUESTION_LIST } from './constants';

const Body = () => {
  const [question, setQuestion] = useState(null);
  const [questNo, setQuestNo] = useState(0);

  useEffect(() => {
    setQuestion(getData(QUESTION_LIST[questNo]));
  }, []);

  useEffect(() => {
    setQuestion(getData(QUESTION_LIST[questNo]));
  }, [questNo]);

  const getData = async (quest) => {
    const data = await axios.get(API_URL + quest);
    setQuestion(data.data[0]);
  };

  if (!question) return <div className='text-[#4c51ed]'>Loading.....</div>;

  return (
    <div className='lg:mx-24'>
      <div className='flex justify-center'>
        <h1 className='font-semibold text-white text-center sm:text-xl md:text-2xl bg-[#4c51ed] py-2 px-3 rounded-md'>
          {question.ChapterID}
        </h1>
      </div>
      <div className='m-10 font-semibold' key={question.AreaUnderTheCurve_901}>
        <MathJaxContext>
          <MathJax>{question.Question}</MathJax>
        </MathJaxContext>
        <div
          className={`my-10 flex justify-between text-white ${
            questNo < QUESTION_LIST.length - 1 ? 'flex-row-reverse' : ''
          }`}
        >
          {questNo < QUESTION_LIST.length - 1 ? (
            <button
              className={`p-2 rounded-lg bg-[#4c51ed] `}
              onClick={() => {
                setQuestNo(questNo + 1);
              }}
            >
              Next
            </button>
          ) : null}
          {questNo > 0 ? (
            <button
              className='p-2 rounded-lg bg-[#4c51ed]'
              onClick={() => {
                setQuestNo(questNo - 1);
              }}
            >
              Previous
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Body;
