import { useEffect } from 'react';
import { motion } from 'framer-motion';

function ThankYouScreen({ onReset }) {
  useEffect(() => {
 
    const timer = setTimeout(onReset, 5000);
    return () => clearTimeout(timer);
  }, [onReset]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
 
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl"
      >
 
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.4 }}
            className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-5xl shadow-lg"
          >
            ✓
          </motion.div>
        </motion.div>
 
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-slate-900 mb-4"
        >
          Thank You!
        </motion.h1>
 
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-600 mb-6"
        >
          Your feedback has been submitted successfully
        </motion.p>
 
        <motion.div
          variants={itemVariants}
          className="p-6 bg-white rounded-xl shadow-md border border-slate-200 mb-8"
        >
          <p className="text-slate-600 mb-3">We appreciate your time and insights!</p>
          <p className="text-sm text-slate-500">
            Your responses will help us enhance the experience for all our guests.
          </p>
        </motion.div>

 
        <motion.div
          variants={itemVariants}
          className="text-slate-500 text-sm"
        >
          <p>Returning to welcome screen in 5 seconds...</p>
        </motion.div>

 
        <motion.button
          variants={itemVariants}
          onClick={onReset}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 px-8 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-full transition-colors"
        >
          Start Over
        </motion.button>
      </motion.div>
    </div>
  );
}

export default ThankYouScreen;