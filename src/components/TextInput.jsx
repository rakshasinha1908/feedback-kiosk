import { motion } from 'framer-motion';

function TextInput({ value, onChange, placeholder }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl"
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-6 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-none text-lg bg-white shadow-sm transition-colors duration-200 resize-none"
        rows={6}
      />

      {/* Character count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-3 text-sm text-slate-500"
      >
        {value.length} characters
      </motion.div>
    </motion.div>
  );
}

export default TextInput;