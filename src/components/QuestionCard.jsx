import { motion } from 'framer-motion';
import RatingInput from './RatingInput';
import TextInput from './TextInput';

function QuestionCard({ question, answer, onAnswer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
       
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-12 leading-tight max-w-4xl">
        {question.text}
      </h2>

       
      {question.type === 'rating' && (
        <RatingInput
          scale={question.scale}
          value={answer}
          onChange={onAnswer}
          lowLabel={question.lowLabel}
          highLabel={question.highLabel}
        />
      )}

      {question.type === 'text' && (
        <TextInput
          value={answer || ''}
          onChange={onAnswer}
          placeholder={question.placeholder}
        />
      )}
    </motion.div>
  );
}

export default QuestionCard;