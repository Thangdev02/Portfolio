import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCode, FaMobile, FaRocket, FaPalette, FaShieldAlt, FaHeadset } from "react-icons/fa";

const ServicesSection = () => {
  const { t } = useTranslation();

  const packages = [
    {
      key: "basic",
      icon: <FaCode className="text-4xl" />,
      popular: false
    },
    {
      key: "standard",
      icon: <FaMobile className="text-4xl" />,
      popular: true
    },
    {
      key: "premium",
      icon: <FaRocket className="text-4xl" />,
      popular: false
    }
  ];

  const whyChooseUs = [
    {
      key: "design",
      icon: <FaPalette className="text-3xl text-white" />
    },
    {
      key: "quality",
      icon: <FaShieldAlt className="text-3xl text-white" />
    },
    {
      key: "support",
      icon: <FaHeadset className="text-3xl text-white" />
    }
  ];

  return (
    <section id="services" data-section="3" className="relative min-h-screen py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
            {t("services.subtitle")}
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
            {t("services.title")}
          </h2>
          <div className="w-20 h-[1px] bg-white mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative group ${
                pkg.popular ? "md:scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 text-xs font-medium rounded-full">
                  {t("services.popular")}
                </div>
              )}
              
              <div className={`h-full bg-[#111] border ${
                pkg.popular ? "border-white" : "border-gray-800"
              } rounded-lg p-8 transition-all duration-300 group-hover:border-white/50`}>
                <div className="mb-6 text-gray-400 group-hover:text-white transition-colors">
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-light text-white mb-2">
                  {t(`services.packages.${pkg.key}.name`)}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-light text-white">
                    {t(`services.packages.${pkg.key}.price`)}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {t(`services.packages.${pkg.key}.unit`)}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {t(`services.packages.${pkg.key}.features`, { returnObjects: true }).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-400">{feature}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors">
                  {t("services.getStarted")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t("services.whyChooseUs.title")}
          </h3>
          <div className="w-16 h-[1px] bg-white mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                {reason.icon}
              </div>
              
              <h4 className="text-xl font-light text-white mb-3">
                {t(`services.whyChooseUs.${reason.key}.title`)}
              </h4>
              
              <p className="text-sm text-gray-400 leading-relaxed">
                {t(`services.whyChooseUs.${reason.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;