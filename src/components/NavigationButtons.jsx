import { motion } from 'framer-motion';

function NavigationButtons({
  onPrevious,
  onSkip,
  onNext,
  isFirstQuestion,
  isLastQuestion,
}) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      
      <motion.button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        whileHover={!isFirstQuestion ? { x: -4 } : {}}
        whileTap={!isFirstQuestion ? { scale: 0.95 } : {}}
        className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
          isFirstQuestion
            ? 'text-slate-300 cursor-not-allowed'
            : 'text-indigo-600 hover:bg-indigo-50'
        }`}
      >
        <span>←</span>
        Previous
      </motion.button>

      {/* Skip button */}
      <motion.button
        onClick={onSkip}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 text-slate-600 font-semibold hover:text-slate-900 transition-colors duration-200"
      >
        Skip Question
      </motion.button>

      {/* Next button */}
      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)' }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center gap-2"
      >
        {isLastQuestion ? 'Submit' : 'Next'}
        <span>→</span>
      </motion.button>
    </div>
  );
}

export default NavigationButtons;