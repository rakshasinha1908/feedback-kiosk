import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyContainer from './components/SurveyContainer';
import ThankYouScreen from './components/ThankYouScreen';
import { generateSessionId } from './utils/helpers';

// Survey questions configuration
const QUESTIONS = [
  {
    id: 1,
    type: 'rating',
    scale: 10,
    text: 'How would you rate your experience today?',
    lowLabel: 'Not Great',
    highLabel: 'Exceptional',
  },
  {
    id: 2,
    type: 'rating',
    scale: 10,
    text: 'How satisfied are you with our service quality?',
    lowLabel: 'Very Dissatisfied',
    highLabel: 'Very Satisfied',
  },
  {
    id: 3,
    type: 'rating',
    scale: 5,
    text: 'Would you recommend us to a friend?',
    lowLabel: 'Not Likely',
    highLabel: 'Very Likely',
  },
  {
    id: 4,
    type: 'text',
    text: 'What could we improve?',
    placeholder: 'Share your thoughts...',
  },
  {
    id: 5,
    type: 'text',
    text: 'Any additional comments?',
    placeholder: 'Optional feedback...',
  },
];

function App() {
  const [screen, setScreen] = useState('welcome');  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sessionId, setSessionId] = useState(null);

  
  useEffect(() => {
    const savedSession = localStorage.getItem('surveySession');
    if (savedSession) {
      try {
        const session = JSON.parse(savedSession);
        setSessionId(session.sessionId);
        setAnswers(session.answers || {});
        if (session.status === 'COMPLETED') {
          setScreen('welcome');
        }
      } catch (error) {
        console.error('Error loading session:', error);
      }
    }
  }, []);

  const handleStartSurvey = () => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setScreen('survey');
  };

  const handleAnswerQuestion = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleSubmitSurvey = () => {
    const surveyData = {
      sessionId,
      answers,
      status: 'COMPLETED',
      completedAt: new Date().toISOString(),
    };

     
    localStorage.setItem('surveySession', JSON.stringify(surveyData));

     
    const allSurveys = JSON.parse(localStorage.getItem('surveysArchive') || '[]');
    allSurveys.push(surveyData);
    localStorage.setItem('surveysArchive', JSON.stringify(allSurveys));

    setScreen('thankyou');
  };

  const handleResetToWelcome = () => {
    setScreen('welcome');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSessionId(null);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {screen === 'welcome' && <WelcomeScreen onStart={handleStartSurvey} />}

      {screen === 'survey' && sessionId && (
        <SurveyContainer
          questions={QUESTIONS}
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          sessionId={sessionId}
          onAnswerQuestion={handleAnswerQuestion}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          onSkip={handleSkipQuestion}
          onSubmit={handleSubmitSurvey}
        />
      )}

      {screen === 'thankyou' && <ThankYouScreen onReset={handleResetToWelcome} />}
    </div>
  );
}

export default App;
