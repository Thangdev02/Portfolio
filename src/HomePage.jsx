"use client";
import { useTranslation } from "react-i18next";
import { useRef, useEffect, useState, Suspense } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import ResumeSection from "./ResumesSection";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ProjectCardStack from "./ProjectCardStack";

// 3D Scene Component
function Scene3D() {
  const gltf = useLoader(GLTFLoader, "/backg/scene.gltf");
  
  return (
    <primitive 
      object={gltf.scene} 
      scale={1.8}
      position={[0, -2, 0]}
    />
  );
}

// Component điều khiển thông minh
function SmartControls() {
  const controlsRef = useRef();
  
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const handleStart = () => {
      controls.autoRotate = false;
    };

    const handleEnd = () => {
      setTimeout(() => {
        controls.autoRotate = true;
      }, 2000);
    };

    controls.addEventListener('start', handleStart);
    controls.addEventListener('end', handleEnd);

    return () => {
      controls.removeEventListener('start', handleStart);
      controls.removeEventListener('end', handleEnd);
    };
  }, []);

  return (
    <OrbitControls 
      ref={controlsRef}
      enableZoom={true}
      enablePan={false}
      autoRotate={true}
      autoRotateSpeed={0.5}
      maxPolarAngle={Math.PI / 1.5}
      minPolarAngle={Math.PI / 3}
      maxDistance={15}
      minDistance={3}
      enableDamping={true}
      dampingFactor={0.05}
      rotateSpeed={1.2}
      zoomSpeed={0.8}
    />
  );
}

// Elegant Button Component
const Button = ({ children, size = "default", className = "", variant = "primary", ...props }) => {
  const sizeClasses = {
    default: "px-8 py-3 text-sm",
    lg: "px-12 py-4 text-base",
  };

  const variantClasses = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "border border-white/30 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`relative overflow-hidden font-medium tracking-wide transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Cursor Trail Item Component

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  const { t, i18n } = useTranslation();
  const projects = Object.values(t("projects", { returnObjects: true }));

  const languages = [
    { name: "JavaScript", img: "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png" },
    { name: "ReactJS", img: "https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png" },
    { name: ".NET", img: "https://openmagazine.net/wp-content/uploads/2021/12/hoc-.net_.png" },
    { name: "Python", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2GEuLtKEqeLZanQmEE2b1-rKvPiYTZCvtQ&s" },
    { name: "Flutter", img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_22_638388621130438517_flutter-la-gi_.jpg" },
  ];

  
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;

    const handleWheel = (e) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const sections = document.querySelectorAll('section[data-section]');
      const delta = e.deltaY;
      
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        if (delta > 0 && currentSection < sections.length - 1) {
          setCurrentSection(prev => prev + 1);
          sections[currentSection + 1]?.scrollIntoView({ behavior: 'smooth' });
          isScrolling = true;
          setTimeout(() => { isScrolling = false; }, 1000);
        } else if (delta < 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
          sections[currentSection - 1]?.scrollIntoView({ behavior: 'smooth' });
          isScrolling = true;
          setTimeout(() => { isScrolling = false; }, 1000);
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section'));
            setCurrentSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

 
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden" ref={containerRef}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', serif;
        }

        html {
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          overflow-y: scroll;
          overflow-x: hidden;
        }
        
        body {
          overflow-x: hidden;
          background: #0a0a0a;
        }
        
        section[data-section] {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          min-height: 100vh;
          position: relative;
        }

        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: white;
          transform-origin: left;
          z-index: 999;
        }

        .section-indicators {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-indicator {
          width: 2px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .section-indicator::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background: white;
          transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section-indicator.active::before {
          height: 100%;
        }
      `}</style>

     

      <motion.div
        className="scroll-progress"
        style={{
          scaleX: useTransform(
            useMotionValue(0),
            [0, 1],
            [0, 1]
          ),
        }}
      />

      <div className="section-indicators hidden lg:flex">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`section-indicator ${currentSection === index ? 'active' : ''}`}
            onClick={() => {
              const sections = document.querySelectorAll('section[data-section]');
              sections[index]?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-6">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="text-xl font-light tracking-[0.3em] text-white">
              THANGDEV
            </span>
          </motion.div>

         <nav className="hidden lg:flex items-center gap-12">
  {["home", "about", "projectsDone", "languageandfw"].map((item, index) => (
    <a
      key={item}
      href={`#${item}`}
      onClick={(e) => {
        e.preventDefault();
        const sections = document.querySelectorAll('section[data-section]');
        sections[index]?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="relative text-xs font-light tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-500 uppercase group"
    >
      {t(item)}
      <span
        className={`absolute -bottom-2 left-0 h-[1px] bg-white transition-all duration-500 ${
          currentSection === index ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  ))}
</nav>


          <div className="flex items-center gap-6">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue={i18n.language}
              className="appearance-none bg-transparent border border-white/20 px-4 py-2 text-xs font-light tracking-wider text-white cursor-pointer focus:outline-none focus:border-white/40 transition-all duration-300"
            >
              <option value="en" className="bg-black">EN</option>
              <option value="vi" className="bg-black">VI</option>
            </select>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-2xl text-white/80 hover:text-white transition"
            >
              {isMenuOpen ? "×" : "≡"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#0a0a0a] border-t border-white/5"
            >
              <div className="py-8 px-6 space-y-6">
                {["home", "about", "projectsDone", "languageandfw"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-light tracking-[0.2em] text-white uppercase hover:text-gray-400 transition duration-300"
                  >
                    {t(item)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION WITH 3D BACKGROUND */}
      <section id="home" data-section="0" className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} castShadow />
              <Scene3D />
              <Environment preset="sunset" />
              <SmartControls />
            </Suspense>
          </Canvas>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-1 pointer-events-none" />

        <motion.div 
          className="relative z-10 text-center max-w-5xl mx-auto pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-xs tracking-[0.3em] text-gray-300 uppercase mb-4 drop-shadow-lg">
              {t("subname")}
            </p>
            <h1 className="text-8xl md:text-[12rem] font-light tracking-tight leading-none drop-shadow-2xl">
              <span className="block text-white">
                {t("lastname")}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 text-sm tracking-[0.4em] font-light text-gray-300 uppercase drop-shadow-lg"
          >
            Web Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg">{t("contact")}</Button>
            <Button size="lg" variant="secondary">{t("projectsDone")}</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-20 flex justify-center gap-8 text-xl"
          >
            <a href="https://www.facebook.com/thang.quoc.94651774/" className="text-gray-300 hover:text-white transition duration-300 drop-shadow-lg">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/le-quoc-thang-339925308/" className="text-gray-300 hover:text-white transition duration-300 drop-shadow-lg">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Thangdev02" className="text-gray-300 hover:text-white transition duration-300 drop-shadow-lg">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300 drop-shadow-lg">
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent drop-shadow-lg" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" data-section="1" className="relative min-h-screen py-32 px-6 overflow-hidden flex items-center bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-12"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6"
                >
                  {t("about")}
                </motion.p>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-7xl font-light tracking-tight leading-tight text-white"
                >
                  DESIGN<br />& FREEDOM
                </motion.h2>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-[1px] bg-white mt-8"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-6 text-base leading-relaxed font-light text-gray-400"
              >
                <p>
                  {t("aboutMe")}
                </p>

                <div className="pt-8 space-y-3 text-sm">
                  <p className="text-white font-normal tracking-wide">Le Quoc Thang</p>
                  <p>Full-Stack Developer</p>
                  <div className="pt-4 space-y-2">
                    <p>thangdev02@gmail.com</p>
                    <p>0949 450 800</p>
                    <p>218/4 Ngo Quyen, Rach Gia, An Giang</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="border-l border-white/20 pl-6 py-4"
              >
                <p className="text-sm font-light italic text-gray-400 leading-relaxed">
                  "Moi dong code la mot cau chuyen. Toi viet bang dam me, hoan thien bang su ti mi."
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/5 blur-2xl" />
                <img
                  src="/deptrai.png"
                  alt="Le Quoc Thang"
                  className="relative w-full max-w-lg h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - CURSOR TRAIL */}
     <section
  id="projectsDone"
  data-section="2"
  className="relative min-h-screen py-32 px-6 flex items-center bg-[#0a0a0a]"
>
  <div className="max-w-7xl mx-auto w-full text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
        {t("projectsDone")}
      </p>
      <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6">
        SELECTED WORKS
      </h2>
      <div className="w-24 h-[1px] bg-white mx-auto mb-10" />

      <p className="text-xs tracking-[0.3em] text-gray-600 uppercase">
        Click a card to explore next project
      </p>
    </motion.div>

    <ProjectCardStack projects={projects} />
  </div>
</section>


      {/* LANGUAGES & FRAMEWORKS */}
      <section id="languageandfw" data-section="3" className="relative min-h-screen py-32 px-6 overflow-hidden flex items-center bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
              {t("languageandfw")}
            </p>
            <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white">
              TECH STACK
            </h2>
            <div className="w-24 h-[1px] bg-white mt-8" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="aspect-square bg-[#141414] border border-white/10 p-8 flex items-center justify-center group-hover:border-white/30 transition-all duration-500">
                  <img
                    src={lang.img || "/placeholder.svg"}
                    alt={lang.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <p className="mt-4 text-center text-xs tracking-[0.2em] text-gray-500 uppercase group-hover:text-white transition-colors duration-300">
                  {lang.name}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-xs tracking-[0.3em] text-gray-600 uppercase">
              & More Technologies
            </p>
          </motion.div>
        </div>
      </section>

      <ResumeSection />

      {/* Footer */}
      <footer className="py-16 text-center border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs tracking-[0.2em] text-gray-600 uppercase">
              © 2025 Thang Le Quoc
            </p>
            <div className="flex gap-8 text-sm">
              <a href="https://www.facebook.com/thang.quoc.94651774/" className="text-gray-600 hover:text-white transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/le-quoc-thang-339925308/" className="text-gray-600 hover:text-white transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Thangdev02" className="text-gray-600 hover:text-white transition duration-300">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}