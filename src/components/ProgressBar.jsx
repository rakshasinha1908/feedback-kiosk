import { motion } from 'framer-motion';

function ProgressBar({ progress }) {
  return (
    <div className="w-full h-2 bg-slate-300 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        className="h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
      />
    </div>
  );
}

export default ProgressBar;