import { motion } from 'framer-motion';

function RatingInput({ scale, value, onChange, lowLabel, highLabel }) {
  const items = Array.from({ length: scale }, (_, i) => i + 1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-full">
    
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 md:gap-4 justify-center mb-8"
      >
        {items.map((item) => (
          <motion.button
            key={item}
            variants={itemVariants}
            onClick={() => onChange(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl font-semibold text-lg transition-all duration-200 ${
              value === item
                ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {item}
            {value === item && (
              <motion.div
                layoutId="selected"
                className="absolute inset-0 rounded-2xl border-2 border-indigo-400 opacity-0 pointer-events-none"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
 
      {lowLabel && highLabel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between items-center text-sm md:text-base text-slate-600 mt-8 px-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">😞</span>
            <span className="font-medium">{lowLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{highLabel}</span>
            <span className="text-lg">✨</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default RatingInput;