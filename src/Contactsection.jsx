import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const packages = ["basic", "standard", "premium"];

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: "", message: "" });

  try {
    const serviceId = "service_itb7iri";
    const templateId = "template_t3uev34";
    const publicKey = "mTMw5cFxu5GyH2bxn";

    // Sử dụng sendForm để tránh lỗi gán biến thủ công
    const result = await emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    );

    setStatus({ type: "success", message: t("contact.successMessage") });
    form.current.reset();
  } catch (error) {
    console.error('EmailJS Error:', error);
    setStatus({ type: "error", message: t("contact.errorMessage") });
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" data-section="4" className="relative min-h-screen py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
            {t("contact.subtitle")}
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-[1px] bg-white mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-gray-800 rounded-lg p-8 md:p-12"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                {t("contact.form.name")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                placeholder={t("contact.form.namePlaceholder")}
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("contact.form.email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("contact.form.phone")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  placeholder={t("contact.form.phonePlaceholder")}
                />
              </div>
            </div>

            {/* Package Selection */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                {t("contact.form.package")} <span className="text-red-500">*</span>
              </label>
              <select
                name="package"
                required
                className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
              >
                <option value="">{t("contact.form.selectPackage")}</option>
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {t(`services.packages.${pkg}.name`)}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                {t("contact.form.message")} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white focus:border-white focus:outline-none transition-colors resize-none"
                placeholder={t("contact.form.messagePlaceholder")}
              />
            </div>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded ${
                  status.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-4 rounded font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <span>{t("contact.form.sending")}</span>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>{t("contact.form.submit")}</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-2">{t("contact.directEmail")}</p>
          <a
            href="mailto:thangdev02@gmail.com"
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            thangdev02@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;