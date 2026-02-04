import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CARD_OFFSET = 30;
const SCALE_FACTOR = 0.06;

export default function ProjectCardStack({ projects }) {
  const [cards, setCards] = useState(projects);

  const moveToEnd = (index) => {
    setCards((prev) => {
      const newCards = [...prev];
      const [removed] = newCards.splice(index, 1);
      newCards.push(removed);
      return newCards;
    });
  };

  return (
    <div className="relative w-full h-[520px] flex items-center justify-center">
      <AnimatePresence>
        {cards.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.title}
            className="absolute w-[340px] md:w-[420px] bg-[#141414] border border-white/10 shadow-2xl cursor-pointer"
            style={{ zIndex: cards.length - index }}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{
              opacity: 1 - index * 0.15,
              scale: 1 - index * SCALE_FACTOR,
              y: index * CARD_OFFSET,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => moveToEnd(index)}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="p-6 space-y-3">
              <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                {project.category}
              </p>
              <h3 className="text-2xl font-light text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
