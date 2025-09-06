"use client"
import { useTranslation } from "react-i18next"
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import ResumeSection from "./ResumesSection"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Macbook3D from "./MacbookModel"

// Custom Button component
const Button = ({ children, size = "default", className = "", ...props }) => {
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      className={`bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Card components
const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-gray-900 border border-gray-800 rounded-lg shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
)

export default function HomePage() {
  const { t, i18n } = useTranslation()
  const projects = Object.values(t("projects", { returnObjects: true }))

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
 

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }
  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const languages = [
    {
      name: "JavaScript",
      img: "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png",
    },
    {
      name: "ReactJS",
      img: "https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png",
    },
    {
      name: ".NET",
      img: "https://openmagazine.net/wp-content/uploads/2021/12/hoc-.net_.png",
    },
    {
      name: "PyThon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2GEuLtKEqeLZanQmEE2b1-rKvPiYTZCvtQ&s",
    },
    {
      name: "Flutter",
      img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_22_638388621130438517_flutter-la-gi_.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <nav className="flex gap-6 text-white font-medium navi" style={{ fontFamily: "Montserrat" }}>
            <a href="#home" className="hover:text-white transition-colors">{t("home")}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t("about")}</a>
            <a href="#projectsDone" className="hover:text-primary transition-colors">{t("projectsDone")}</a>
            <a href="#languageandfw" className="hover:text-primary transition-colors">{t("languageandfw")}</a>
          </nav>

          <select
            style={{ fontFamily: "Montserrat" }}
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="bg-transparent border border-white/40 text-white rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="en" className="text-black">English</option>
            <option value="vi" className="text-black">Tiếng Việt</option>
          </select>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-10 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/bgNew.jpg')", fontFamily: "Montserrat" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 max-w-3xl text-left pl-50"
          variants={fadeUp}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }} 
        >
          <h1 className="text-5xl md:text-7xl text-white " style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.2em" }}>
            
            <motion.span
             variants={fadeUp}
             initial={{ opacity: 0, y: -10, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 1, delay: 1.8 }} 
            style={{ fontWeight: 200 }}>{t("subname")}</motion.span>
            <br />
            <motion.span
            variants={fadeUp}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2, delay: 2 }} 
            className="name" style={{ fontWeight: 900, fontSize: "2.5em", padding: 0 }}>
              {t("lastname")}
            </motion.span>
            <p className="text-xl md:text-2xl text-gray-300 mb-8" style={{ letterSpacing: "0.4em" }}>Web Developer</p>
          </h1>

          <motion.div
           variants={scaleIn}
           initial={{ opacity: 0, y: -10, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1, delay: 2.2 }} className="flex gap-4 mb-10">
            <Button style={{borderRadius:"40px" }} size="lg" className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 rounded-full px-10 py-2 text-lg">
              {t("contact")}
            </Button>
            <Button style={{borderRadius:"40px" }} size="lg" className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 rounded-full px-10 py-2 text-lg">
              {t("projectsDone")}
            </Button>
          </motion.div>

          <div className="flex gap-6 text-2xl">
            <motion.a
             variants={fadeLeft}
             initial={{ opacity: 0, y: -10, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 1, delay: 2.1 }} 
             href="https://www.facebook.com/thang.quoc.94651774/"><FaFacebookF color="orange" /></motion.a>
            <motion.a 
             variants={fadeLeft}
             initial={{ opacity: 0, y: -10, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 1, delay: 2.2 }} 
            href="https://www.linkedin.com/in/le-quoc-thang-339925308/"><FaLinkedinIn color="orange" /></motion.a>
             <motion.a 
             variants={fadeLeft}
             initial={{ opacity: 0, y: -10, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 1, delay: 2.3 }}  href="https://github.com/Thangdev02"><FaGithub color="orange" /></motion.a>
            <motion.a 
             variants={fadeLeft}
             initial={{ opacity: 0, y: -10, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 1, delay: 2.4 }} href="#"><FaInstagram color="orange" /></motion.a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section
  id="about"
  className="py-20 px-6bg-gradient-to-br from-black via-gray-900 to-gray-600 text-white"
  style={{ fontFamily: "Montserrat" }}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left: About Content */}
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-6 "
    >
      <h2 className="text-3xl font-bold uppercase tracking-wide border-b-2 border-orange-300 inline-block pb-1">
        {t("about")}
      </h2>
      <p className="text-sm text-orange-300">thangdev02@gmail.com</p>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        {t("aboutMe")}
      </p>

      <div className="pt-4 text-sm text-gray-400">
         0949450800<br />
         218/4 Ngo Quyen, Rach Gia, An Giang, Viet Nam
      </div>
    </motion.div>

    {/* Right: Image */}
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex justify-center md:justify-end "
    >
      <img
        src="/deptrai.png"
        alt="Avatar"
        className="w-100 h-auto object-cover shadow-lg rounded-lg"
      />
    </motion.div>
  </div>
</section>


      {/* Projects */}
      <section id="projectsDone" className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-bold text-center mb-12"
            style={{ color: "orange", fontFamily: "Montserrat", fontSize: "2.4em",marginBottom:"2rem"}}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            s
          >
            {t("projectsDone")}
          </motion.h2>

          <div style={{ fontFamily: "Montserrat" }}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={3} // hiển thị 3 project 1 lúc (có thể đổi 4)
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.title} style={{padding:"1rem 0.5rem"}}>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ textDecoration: "none" }}
            >
              <Card className="hover:scale-105 transition-all duration-300 cursor-pointer group  bg-gradient-to-br from-black via-gray-900 to-gray-900" style={{height:"400px" }}>
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">{project.category}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
      </section>

<Macbook3D screenImage="/winnerGarden.png" />
      {/* Stats */}
      <section className="py-20 px-6 bg-card">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{fontFamily:"Montserrat"}}
        >
          <h2 className="text-white mb-4" style={{ fontSize: "2rem" }}>{t("qoute")}</h2>
          <div className="text-8xl md:text-9xl font-bold text-warning mb-4">30</div>
          <p className="text-xl text-muted-foreground">{t("projectsDone")}</p>
        </motion.div>
      </section>

      {/* Languages */}
      <section id="languageandfw" className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ color: "orange", fontFamily: "Montserrat",marginBottom:"2rem" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {t("languageandfw")}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-18 h-18 mb-4 flex items-center justify-center rounded-full group-hover:bg-gray-200 transition overflow-hidden">
                      <img src={lang.img} alt={lang.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">{lang.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ResumeSection/>

      {/* Declaration */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: "orange", fontFamily: "Montserrat" }}>
            {t("declaration")}
          </h2>
          <p className="text-white text-lg md:text-xl">{t("publications")}</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Thang Le Quoc. Portfolio.</p>
        </div>
      </footer>
    </div>
  )
}
