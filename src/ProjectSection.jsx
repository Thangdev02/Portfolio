import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ProjectSection = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
           {
      key: "angiang",
      link: "https://an-giang-real-estate.vercel.app/"
    },
      {
      key: "thiepcuoi",
      link: "https://winner-wedding.vercel.app/"
    },
    {
      key: "winnerTech",
      link: "https://www.winnertech.cloud/"
    },
    {
      key: "dearFab",
      link: "https://www.dearfab.com/"
    },
    {
      key: "hangoutL",
      link: "https://landing.hangout.com.vn/"
    },
    {
      key: "hangoutApp",
      link: "https://apps.apple.com/vn/app/hangout/id6747320890?l=vi"
    },
    {
      key: "winnerGarden",
      link: "https://winnergarden.onrender.com"
    },
    {
      key: "ohBauApp",
      link: "https://apps.apple.com/vn/app/ohbau/id6747362141?l=vi"
    },
    {
      key: "broGlow",
      link: "https://apps.apple.com/vn/app/broglow/id6748694221?l=vi"
    },
    {
      key: "gymRadar",
      link: "https://apps.apple.com/vn/app/gymradar/id6748238755?l=vi"
    },
    {
      key: "superPanda",
      link: "https://www.superpanda.com.vn/"
    }
  ];

  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="projectsDone"
      data-section="2"
      className="relative min-h-screen py-20 px-6 flex items-center bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
            {t("projectsDone")}
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-4">
            SELECTED WORKS
          </h2>
          <div className="w-20 h-[1px] bg-white mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <motion.a
              key={project.key}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-lg bg-[#111] cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={t(`projects.${project.key}.image`)}
                  alt={t(`projects.${project.key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                    {t(`projects.${project.key}.description`)}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t(`projects.${project.key}.position`)}
                  </p>
                </div>
              </div>

              {/* Bottom Label - Always Visible */}
              <div className="p-4 border-t border-gray-800">
                <h3 className="text-base font-medium text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {t(`projects.${project.key}.description`)}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevPage}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm tracking-wider uppercase">Previous</span>
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPage
                      ? "bg-white w-8"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm tracking-wider uppercase">Next</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;