"use client";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import ResumeSection from "./ResumesSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Macbook3D from "./MacbookModel";
import { useState } from "react";
// Custom Glass Button
const Button = ({ children, size = "default", className = "", ...props }) => {
  const sizeClasses = {
    default: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/20 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default function HomePage() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const projects = Object.values(t("projects", { returnObjects: true }));

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const languages = [
    { name: "JavaScript", img: "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png" },
    { name: "ReactJS", img: "https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png" },
    { name: ".NET", img: "https://openmagazine.net/wp-content/uploads/2021/12/hoc-.net_.png" },
    { name: "Python", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2GEuLtKEqeLZanQmEE2b1-rKvPiYTZCvtQ&s" },
    { name: "Flutter", img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_22_638388621130438517_flutter-la-gi_.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Global Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-700 to-orange-500 opacity-80" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* HEADER – SIÊU PHẨM 2025 */}
<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/70 border-b border-white/5">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
    
    {/* Logo + Name – Sang trọng */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg">
        T
      </div>
      <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400">
        ThangDev
      </span>
    </motion.div>

    {/* Desktop Navigation – Có hiệu ứng gạch chân + active */}
    <nav className="hidden lg:flex items-center gap-10">
      {["home", "about", "projectsDone", "languageandfw"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
        >
          {t(item)}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full" />
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full scale-x-0 transition-transform duration-500 origin-left data-[active]:scale-x-100" />
        </a>
      ))}
    </nav>

    {/* Right Side: Language + Mobile Menu */}
    <div className="flex items-center gap-6">
      {/* Language Switcher – Siêu đẹp */}
      <div className="relative group">
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          defaultValue={i18n.language}
          className="appearance-none bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 text-sm font-medium text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 pr-10"
        >
          <option value="en">EN</option>
          <option value="vi">VI</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            className="text-white/60"
          >
            ▼
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Button – Đỉnh cao */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-3xl text-white/80 hover:text-white transition"
      >
        {isMenuOpen ? "×" : "≡"}
      </button>
    </div>
  </div>

  {/* Mobile Menu – Fullscreen, mượt như iOS */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/10"
      >
        <div className="py-8 px-6 space-y-6">
          {["home", "about", "projectsDone", "languageandfw"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-bold text-white hover:text-orange-400 transition duration-300"
            >
              {t(item)}
            </motion.a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-20 left-20 w-64 h-64 bg-white/10 backdrop-blur-md rounded-3xl rotate-45" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-32 right-32 w-80 h-80 bg-white/5 backdrop-blur-md rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl md:text-9xl font-black tracking-tight">
            <span className="block text-4xl md:text-6xl opacity-90 mb-4">{t("subname")}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300">
              {t("lastname")}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="mt-6 text-2xl md:text-4xl font-light tracking-widest text-orange-200">
            Web Developer
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Button>{t("contact")}</Button>
            <Button>{t("projectsDone")}</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-12 flex justify-center gap-8 text-3xl">
            <a href="https://www.facebook.com/thang.quoc.94651774/" className="hover:text-orange-400 transition"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/le-quoc-thang-339925308/" className="hover:text-orange-400 transition"><FaLinkedinIn /></a>
            <a href="https://github.com/Thangdev02" className="hover:text-orange-400 transition"><FaGithub /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaInstagram /></a>
          </motion.div>
        </div>
      </section>

      {/* What’s in it for you? */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black mb-6">
            What’s in it for you?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-gray-300 max-w-2xl mx-auto mb-20">
            Gain skills that will set you apart in the professional world. Real projects, real results.
          </motion.p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Hands-on learning", desc: "Build real-world projects from day one" },
              { num: "02", title: "Mentorship by experts", desc: "Learn directly from industry leaders" },
              { num: "03", title: "Wide applicable skills", desc: "Master technologies used by top companies" },
              { num: "04", title: "Street cred", desc: "Portfolio that speaks louder than certificates" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="relative group">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition">
                  <div className="text-6xl font-black text-orange-400 mb-4">{item.num}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl rotate-12 opacity-60" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
     {/* ==================== ABOUT – PHIÊN BẢN ĐỈNH CAO NHẤT ==================== */}
<section id="about" className="relative py-32 px-6 overflow-hidden">
  {/* Floating Background Elements */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ y: [0, -100, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl rotate-45"
    />
    <motion.div
      animate={{ y: [0, 100, 0], rotate: [360, 180, 0] }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-orange-500/20 to-pink-600/20 rounded-full blur-3xl"
    />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      {/* Left: Text + Story */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-10"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-9xl font-black tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300">
              {t("about")}
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-2 bg-gradient-to-r from-orange-400 to-pink-500 mt-4 rounded-full"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300"
          >
            {t("aboutMe")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4"
          >
            <p className="text-orange-300 font-bold text-xl">Lê Quốc Thắng</p>
            <p className="text-gray-400">Full-Stack Developer • AI Enthusiast • Creative Coder</p>
            <div className="pt-4 space-y-2 text-gray-300">
              <p>thangdev02@gmail.com</p>
              <p>0949 450 800</p>
              <p>218/4 Ngô Quyền, Rạch Giá, An Giang</p>
            </div>
          </motion.div>
        </div>

        {/* Floating Quote */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mt-12 p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl"
        >
          <span className="absolute -top-4 left-8 text-8xl text-orange-400/20 font-black select-none">“</span>
          <p className="text-xl italic text-gray-200 pl-12">
            "Mỗi dòng code là một câu chuyện. Tôi viết bằng đam mê, hoàn thiện bằng sự tỉ mỉ."
          </p>
          <span className="absolute -bottom-8 right-8 text-8xl text-orange-400/20 font-black select-none rotate-180">”</span>
        </motion.div>
      </motion.div>

      {/* Right: Avatar 3D + Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative flex justify-center"
      >
        <div className="relative">
          {/* Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-20 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-orange-500/30 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="relative z-10"
          >
            <img
              src="/deptrai.png"
              alt="Lê Quốc Thắng"
              className="w-96 h-96 md:w-[500px] md:h-[500px] object-cover rounded-3xl shadow-3xl border-4 border-white/20"
            />
          </motion.div>
        
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* PROJECTS – SLIDER 3D COVERFLOW SIÊU ĐỈNH */}
      <section id="projectsDone" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div animate={{ x: [0, 300, 0], y: [0, -200, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-96 h-96 bg-gradient-to-br from-pink-500/40 to-purple-600/40 rounded-full blur-3xl" />
          <motion.div animate={{ x: [0, -400, 0], y: [0, 200, 0] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute right-0 w-80 h-80 bg-gradient-to-tr from-orange-500/40 to-pink-600/40 rounded-3xl blur-3xl rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h2 className="text-7xl md:text-9xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300">
                {t("projectsDone")}
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-300">Những kiệt tác tôi đã tạo ra</p>
          </motion.div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 300, modifier: 1.5, slideShadows: false }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full max-w-2xl">
                {({ isActive }) => (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                    animate={{ scale: isActive ? 1.00 : 0.9, z: isActive ? 100 : 0 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    whileHover={{ scale: isActive ? 1.08 : 1.02 }}
                  >
                    <div className={`absolute -inset-1 rounded-3xl blur-xl transition-all duration-700 ${isActive ? "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 opacity-80" : "opacity-0"}`} />

                    <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="relative aspect-video overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-1000" style={{ transform: isActive ? "scale(1.1)" : "scale(1)" }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">{project.category}</span>
                          <motion.span animate={{ opacity: isActive ? 1 : 0.2 }} className="text-9xl font-black opacity-10 select-none">
                            {(index + 1).toString().padStart(2, "0")}
                          </motion.span>
                        </div>

                        <h3 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{project.title}</h3>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl">{project.description}</p>

                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: isActive ? 0 : 30, opacity: isActive ? 1 : 0 }} transition={{ delay: 0.3 }} className="flex gap-6">
                          <div className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-bold hover:scale-110 transition">View Live</div>
                          <div className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/40 rounded-full font-bold hover:bg-white/30 transition">Source Code</div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.a>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx>{`
          .projects-swiper { padding: 100px 0 !important; }
          .projects-swiper .swiper-slide { transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }
          .projects-swiper .swiper-pagination-bullet { background: rgba(255,255,255,0.3); opacity: 1; width: 12px; height: 12px; }
          .projects-swiper .swiper-pagination-bullet-active { background: linear-gradient(to right, #ff8a00, #e9409b); transform: scale(1.4); }
          .swiper-button-next, .swiper-button-prev { color: white; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); width: 60px; height: 60px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); }
          .swiper-button-next:after, .swiper-button-prev:after { font-size: 24px; font-weight: bold; }
        `}</style>
      </section>

      <Macbook3D screenImage="/winnerGarden.png" />

      {/* Languages & Frameworks */}
     {/* ==================== LANGUAGES & FRAMEWORKS – CARD STACK → HORIZONTAL (HOÀN HẢO 2025) ==================== */}
<section id="languageandfw" className="relative py-40 px-6 overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl"
    />
  </div>

  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-7xl md:text-9xl font-black tracking-tighter mb-20"
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300">
        {t("languageandfw")}
      </span>
    </motion.h2>

    {/* Main container */}
    <div className="relative h-96 md:h-[550px] flex items-center justify-center">
      <motion.div
        className="relative w-full h-full"
        initial="stack"
        animate="stack"
        whileHover="spread"
        variants={{
          stack: {},
          spread: {},
        }}
      >
        {/* STACK MODE – chồng bài ở giữa */}
        <motion.div
          variants={{
            stack: { opacity: 1 },
            spread: { opacity: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 300 }}
              animate={{
                opacity: 1,
                y: -i * 14,
                x: i % 2 === 0 ? -i * 6 : i * 6,
                rotate: i * 4 - 10,
              }}
              transition={{
                delay: i * 0.15,
                duration: 0.9,
                ease: "backOut",
              }}
              className="absolute"
              style={{ zIndex: languages.length - i }}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white/10 backdrop-blur-3xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden group cursor-pointer">
                <img
                  src={lang.img}
                  alt={lang.name}
                  className="w-full h-full object-cover p-8 group-hover:scale-110 transition duration-500"
                />
              </div>
            </motion.div>
          ))}

          {/* Lá trên cùng – Flutter nổi bật */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.08 }}
            transition={{ delay: 0.9 }}
            className="absolute z-50"
          >
            <div className="w-44 h-44 md:w-52 md:h-52 bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-3xl border-4 border-white/50 rounded-3xl shadow-3xl overflow-hidden">
              <img src={languages[4].img} alt="Flutter" className="w-full h-full object-cover p-10" />
            </div>
           
          </motion.div>
        </motion.div>

        {/* SPREAD MODE – bung ra hàng ngang, KHÔNG LẬT */}
        <motion.div
          variants={{
            stack: { opacity: 0, pointerEvents: "none" },
            spread: { opacity: 1, pointerEvents: "auto" },
          }}
          transition={{ duration: 1, staggerChildren: 0.1, ease: "easeOut" }}
          className="absolute inset-0 flex flex-wrap justify-center items-center gap-10 md:gap-16 px-8"
        >
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              variants={{
                stack: { opacity: 0, scale: 0.5, y: 100 },
                spread: { opacity: 1, scale: 1, y: 0 },
              }}
              // CHỈ PHÓNG TO + NHẤC LÊN – KHÔNG LẬT
              whileHover={{
                scale: 1.35,
                y: -50,
                transition: { duration: 0.5, type: "spring", stiffness: 400 },
              }}
              className="group relative cursor-pointer"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:border-orange-400 transition-all duration-500">
                <img
                  src={lang.img}
                  alt={lang.name}
                  className="w-full h-full object-contain rounded-xl group-hover:scale-110 transition duration-500"
                />
                {/* Glow cực mạnh khi hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.8 }}
                  style={{
                    background: "linear-gradient(135deg, #ff8a00, #e9409b, #9d4edd)",
                  }}
                />
              </div>

              {/* Tên hiện mượt khi hover */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.4 }}
                className="mt-8 text-2xl md:text-3xl font-black text-white"
              >
                {lang.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Hint */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="mt-20 text-lg md:text-xl text-gray-400 italic"
    >
      Di chuột vào để khám phá toàn bộ công nghệ của tôi
    </motion.p>
  </div>
</section>

      <ResumeSection />

      {/* Footer */}
      <footer className="py-20 text-center border-t border-white/10 backdrop-blur-xl bg-black/30">
        <p className="text-gray-400">© 2025 Thang Le Quoc. All rights reserved.</p>
      </footer>
    </div>
  );
}