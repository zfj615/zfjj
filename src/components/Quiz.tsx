import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: Question[];
  onComplete?: (score: number, total: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ title, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
        const score = newAnswers.reduce((acc, answer, index) => {
          return acc + (answer === questions[index].correctAnswer ? 1 : 0);
        }, 0);
        onComplete?.(score, questions.length);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (quizCompleted) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
          <div className="flex items-center justify-center mb-4">
            <Trophy size={48} />
          </div>
          <h2 className="text-2xl font-bold text-center">测验完成！</h2>
        </div>
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 rounded-full p-6 mb-4">
              <span className="text-4xl font-bold text-green-600">{score}/{questions.length}</span>
            </div>
            <p className="text-lg text-gray-700">
              正确率: <span className="font-bold text-green-600">{percentage.toFixed(1)}%</span>
            </p>
            <p className="text-gray-500 mt-2">
              {percentage >= 80 ? '优秀！你已经掌握了这个知识点！' :
               percentage >= 60 ? '良好！建议再复习一下错题。' :
               '需要加强学习，建议重新学习相关内容。'}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">答题详情：</h3>
            {questions.map((q, index) => (
              <div key={q.id} className={`p-4 rounded-lg ${answers[index] === q.correctAnswer ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-start">
                  {answers[index] === q.correctAnswer ? (
                    <CheckCircle size={20} className="text-green-600 mr-2 mt-1" />
                  ) : (
                    <XCircle size={20} className="text-red-600 mr-2 mt-1" />
                  )}
                  <div>
                    <p className="text-gray-800 font-medium">{index + 1}. {q.question}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      正确答案: {q.options[q.correctAnswer]}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{q.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleRestart}
              className="bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center mx-auto"
            >
              <RotateCcw size={18} className="mr-2" />
              重新测验
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm">题目 {currentQuestion + 1} / {questions.length}</span>
          <div className="flex space-x-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < currentQuestion ? 'bg-green-400' :
                  index === currentQuestion ? 'bg-white' :
                  'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {currentQuestion + 1}. {question.question}
          </h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  showResult
                    ? index === question.correctAnswer
                      ? 'bg-green-100 border-2 border-green-500 text-green-800'
                      : selectedAnswer === index
                        ? 'bg-red-100 border-2 border-red-500 text-red-800'
                        : 'bg-gray-100 text-gray-600'
                    : selectedAnswer === index
                      ? 'bg-indigo-100 border-2 border-indigo-500 text-indigo-800'
                      : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    showResult
                      ? index === question.correctAnswer
                        ? 'bg-green-500 text-white'
                        : selectedAnswer === index
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      : selectedAnswer === index
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium">{option}</span>
                  {showResult && index === question.correctAnswer && (
                    <CheckCircle size={20} className="ml-auto text-green-600" />
                  )}
                  {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                    <XCircle size={20} className="ml-auto text-red-600" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showResult && (
          <div className={`p-4 rounded-lg mb-4 ${
            selectedAnswer === question.correctAnswer ? 'bg-green-50' : 'bg-red-50'
          }`}>
            <p className={`font-medium ${
              selectedAnswer === question.correctAnswer ? 'text-green-700' : 'text-red-700'
            }`}>
              {selectedAnswer === question.correctAnswer ? '✓ 正确！' : '✗ 错误'}
            </p>
            <p className="text-gray-600 mt-1">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg font-medium flex items-center ${
              selectedAnswer === null
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {currentQuestion + 1 === questions.length ? '完成测验' : '下一题'}
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;