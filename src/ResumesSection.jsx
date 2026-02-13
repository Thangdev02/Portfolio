import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ResumeSection = () => {
  const { t } = useTranslation();

  const softwareSkills = [
    { key: "design", level: 90 },
    { key: "coding", level: 85 },
    { key: "testing", level: 75 },
    { key: "deploy", level: 80 },
  ];

  const languages = [
    { key: "english", level: 70 },
    { key: "vietnamese", level: 100 },
  ];

  const experiences = [
    { key: "exp1" },
    { key: "exp2" },
    { key: "exp3" },
    { key: "exp4" },
    { key: "exp5" },
  ];

  return (
    <section id="resume" className="relative min-h-screen py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
       
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-4">
            {t("resume.title")}
          </h2>
          <div className="w-20 h-[1px] bg-white mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT COLUMN */}
          <div className="space-y-16">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-light text-white mb-8 pb-3 border-b border-gray-800">
                {t("resume.experience")}
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.key}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2 group-hover:scale-150 transition-transform" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">
                          {t(`resume.experiences.${exp.key}.year`)}
                        </p>
                        <h4 className="text-lg font-medium text-white mb-1">
                          {t(`resume.experiences.${exp.key}.company`)}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {t(`resume.experiences.${exp.key}.role`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light text-white mb-8 pb-3 border-b border-gray-800">
                {t("resume.education")}
              </h3>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-2" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">
                    {t("resume.educationTitle")}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {t("resume.university")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-16">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-light text-white mb-8 pb-3 border-b border-gray-800">
                {t("resume.skills")}
              </h3>
              <div className="space-y-6">
                {softwareSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.key}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">
                        {t(`resume.skillss.${skill.key}`)}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-light text-white mb-8 pb-3 border-b border-gray-800">
                {t("resume.languages")}
              </h3>
              <div className="space-y-6">
                {languages.map((lang, idx) => (
                  <motion.div
                    key={lang.key}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">
                        {t(`resume.langs.${lang.key}`)}
                      </span>
                      <span className="text-sm text-gray-500">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What Can I Do */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light text-white mb-8 pb-3 border-b border-gray-800">
                {t("resume.whatCanIDo")}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t("resume.capabilities")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;