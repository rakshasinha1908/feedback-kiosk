import { motion } from 'framer-motion';

function WelcomeScreen({ onStart }) {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">
          Feedback Station
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-8">
          Premium Retail Experience
        </p>

        {/* Description */}
        <p className="text-lg text-slate-500 mb-12 max-w-lg mx-auto leading-relaxed">
          We'd love to hear about your experience today. Your feedback helps us improve every
          touchpoint of your journey with us.
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          Start Survey
        </motion.button>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 bg-white rounded-xl shadow-md border border-slate-200"
        >
          <p className="text-sm text-slate-600">
            ⏱️ Takes about 2-3 minutes • 📋 5 quick questions • 🔒 Your feedback is anonymous
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WelcomeScreen;