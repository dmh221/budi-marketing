import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* Liquid glass background effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orb 1 - Top left corner */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[#AFBF41]/40 rounded-full blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 30, -15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 2 - Top right */}
        <motion.div
          className="absolute top-[15%] right-[8%] w-[380px] h-[380px] bg-[#AFBF41]/35 rounded-full blur-3xl"
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 3 - Middle left */}
        <motion.div
          className="absolute top-[45%] left-[12%] w-[350px] h-[350px] bg-[#AFBF41]/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.3, 1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 4 - Middle right */}
        <motion.div
          className="absolute top-[50%] right-[15%] w-[320px] h-[320px] bg-[#AFBF41]/25 rounded-full blur-2xl"
          animate={{
            x: [0, -45, 30, 0],
            y: [0, 35, -25, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 5 - Bottom left */}
        <motion.div
          className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#AFBF41]/22 rounded-full blur-3xl"
          animate={{
            x: [0, 35, -25, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 6 - Bottom right */}
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-[360px] h-[360px] bg-[#AFBF41]/18 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -35, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 7 - Center-ish */}
        <motion.div
          className="absolute top-[35%] left-[40%] w-[280px] h-[280px] bg-[#AFBF41]/15 rounded-full blur-2xl"
          animate={{
            x: [0, 45, -35, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 8 - Far right */}
        <motion.div
          className="absolute top-[60%] right-[5%] w-[300px] h-[300px] bg-[#AFBF41]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 35, -20, 0],
            scale: [1, 1.2, 1, 1],
          }}
          transition={{
            duration: 10.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Text content */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Headline */}
        <h1 className="text-2xl font-normal text-black mb-3 leading-tight">
          Cooking has become cognitively expensive.
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-black">
          Budi provides the infrastructure to make it easy.
        </p>
      </motion.div>
    </section>
  );
}
