import { motion, AnimatePresence } from 'framer-motion';

function SubmitModal({ isOpen, onConfirm, onCancel, totalQuestions, answeredQuestions }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

 
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
          >
          
            <button
              onClick={onCancel}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl leading-none"
            >
              ×
            </button>

 
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to submit?</h2>

              <p className="text-slate-600 mb-6">
                You've answered{' '}
                <span className="font-semibold text-indigo-600">{answeredQuestions}</span> out of{' '}
                <span className="font-semibold">{totalQuestions}</span> questions.
              </p>

              {answeredQuestions < totalQuestions && (
                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    💡 You've skipped {totalQuestions - answeredQuestions} question
                    {totalQuestions - answeredQuestions !== 1 ? 's' : ''}
                  </p>
                </div>
              )}

              <p className="text-slate-500 text-sm mb-8">
                You can still go back to answer skipped questions, or submit now.
              </p>
 
              <div className="flex gap-3">
                <motion.button
                  onClick={onCancel}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Go Back
                </motion.button>

                <motion.button
                  onClick={onConfirm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  Submit
                </motion.button>
              </div>
 
              <p className="text-xs text-slate-400 mt-6">
                🔒 Your responses will be kept confidential
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SubmitModal;