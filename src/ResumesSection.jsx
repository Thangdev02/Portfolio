import { FaBook, FaCamera, FaPaintBrush, FaPlane, FaCode, FaLaptopCode, FaRocket, FaLanguage } from "react-icons/fa";
import { motion } from "framer-motion";

const ResumeSection = () => {
  const softwareSkills = [
    { name: "Design", level: 90, icon: <FaPaintBrush /> },
    { name: "Coding", level: 80, icon: <FaCode /> },
    { name: "Testing", level: 70, icon: <FaLaptopCode /> },
    { name: "Deploy", level: 80, icon: <FaRocket /> },
  ];

  const languages = [
    { name: "English", level: 70, icon: <FaLanguage /> },
    { name: "Vietnamese", level: 100, icon: <FaLanguage /> },
  ];

  const experiences = [
    { year: "06/2025 - Present", role: "Project Manager, Front-End Developer, Designer", company: "WinnerTech" },
    { year: "07/2025 - 08/2025", role: "Project Manager, Front-End Developer, Designer", company: "DearFab" },
    { year: "07/2025 - 07/2025", role: "Project Manager, Front-End Developer, AI Developer", company: "LandingPage & App HangOut" },
    { year: "06/2025 - 07/2025", role: "Project Manager, AI Developer", company: "Oh!Bau App" },
    { year: "02/2024 - 12/2024", role: "Founder, Front-End & Mobile Developer", company: "DANST - Sports Facilities System" },
  ];

  const hobbies = [
    { icon: <FaBook />, label: "Reading" },
    { icon: <FaCamera />, label: "Photography" },
    { icon: <FaPaintBrush />, label: "Drawing" },
    { icon: <FaPlane />, label: "Travel" },
  ];

  return (
    <section id="resume" className="relative py-32 px-6 overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 -right-40 w-80 h-80 bg-purple-600/20 rounded-3xl blur-3xl rotate-45" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 backdrop-blur-md rounded-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300"
        >
          My Resume
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT: Experience Timeline */}
          <div className="relative">
            <h3 className="text-3xl font-black mb-10 text-orange-400">Experience</h3>
            
            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative pl-10 group"
                >
                  {/* Timeline Line */}
                  {idx !== experiences.length - 1 && (
                    <div className="absolute left-3 top-10 bottom-0 w-0.5 bg-white/20" />
                  )}
                  
                  {/* Dot */}
                  <div className="absolute left-0 top-4 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 ring-8 ring-black/50 shadow-2xl" />
                  
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                    <span className="text-sm text-orange-300 font-medium">{exp.year}</span>
                    <h4 className="text-xl font-bold mt-2">{exp.company}</h4>
                    <p className="text-gray-300 text-sm mt-1">{exp.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MIDDLE: Skills */}
          <div className="space-y-12">
            {/* Software Skills */}
            <div>
              <h3 className="text-3xl font-black mb-8 text-orange-400">Software Skills</h3>
              <div className="space-y-6">
                {softwareSkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-3xl text-orange-400">{skill.icon}</div>
                      <div className="flex-1 flex justify-between">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-orange-400">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full shadow-lg"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-3xl font-black mb-8 text-orange-400">Languages</h3>
              <div className="space-y-6">
                {languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold flex items-center gap-3">
                        <FaLanguage className="text-orange-400" /> {lang.name}
                      </span>
                      <span className="text-orange-400">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Personal Info & Hobbies */}
          <div className="space-y-12">
            {/* What Can I Do */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition"
            >
              <h3 className="text-2xl font-black mb-4 text-orange-400">What Can I Do?</h3>
              <p className="text-gray-300 leading-relaxed">
                Document • Management • Planning • Design • Coding • Testing • Deploy • Leadership • Problem Solving
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition"
            >
              <h3 className="text-2xl font-black mb-4 text-orange-400">Education</h3>
              <p className="text-xl font-bold">Bachelor of Information Technology</p>
              <p className="text-gray-400">FPT University</p>
            </motion.div>

            {/* Hobbies */}
            <div>
              <h3 className="text-3xl font-black mb-8 text-orange-400">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-6">
                {hobbies.map((hobby, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 hover:border-orange-400 transition-all duration-300">
                      <div className="text-5xl mb-4 text-orange-400 group-hover:text-white transition">
                        {hobby.icon}
                      </div>
                      <p className="font-semibold">{hobby.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;