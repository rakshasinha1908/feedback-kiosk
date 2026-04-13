import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import NavigationButtons from './NavigationButtons';
import SubmitModal from './SubmitModal';

function SurveyContainer({
  questions,
  currentQuestionIndex,
  answers,
  sessionId,
  onAnswerQuestion,
  onNext,
  onPrevious,
  onSkip,
  onSubmit,
}) {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleNextClick = () => {
    if (isLastQuestion) {
      setShowSubmitModal(true);
    } else {
      onNext();
    }
  };

  const handleSubmitConfirm = () => {
    setShowSubmitModal(false);
    onSubmit();
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col overflow-hidden">
 
      <div className="bg-white border-b border-slate-200 px-8 py-6 shadow-sm">
        <div className="max-w-5xl mx-auto">
           

          
          <div className="mt-3 flex items-center gap-3">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
              Step {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>

           
          <div className="mt-4">
            <ProgressBar progress={progress} />
          </div>
        </div>
      </div>

     
      <div className="flex-1 overflow-y-auto px-8 py-10">
        <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionCard
                question={currentQuestion}
                answer={answers[currentQuestion.id]}
                onAnswer={(value) => onAnswerQuestion(currentQuestion.id, value)}
              />
            </motion.div>
          </AnimatePresence>

           
        </div>
      </div>

      
      <div className="bg-white border-t border-slate-200 px-8 py-8 shadow-md">
        <div className="max-w-5xl mx-auto">
          <NavigationButtons
            onPrevious={onPrevious}
            onSkip={onSkip}
            onNext={handleNextClick}
            isFirstQuestion={isFirstQuestion}
            isLastQuestion={isLastQuestion}
          />
        </div>
      </div>

       
      <SubmitModal
        isOpen={showSubmitModal}
        onConfirm={handleSubmitConfirm}
        onCancel={() => setShowSubmitModal(false)}
        totalQuestions={questions.length}
        answeredQuestions={Object.keys(answers).length}
      />
    </div>
  );
}

export default SurveyContainer;