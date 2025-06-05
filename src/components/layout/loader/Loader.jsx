import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[9999] bg-black/50">
      <motion.div
        className="w-10 h-10 rounded-full border-4 border-gray-900 border-t-gray-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
