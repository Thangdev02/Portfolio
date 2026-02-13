// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my website",
      home: "Home",
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
      contactt: "Contact",
      projectsDone:"Projects",
       subname:"Le Quoc",
       lastname:"Thang",
       aboutMe:"I’m a Full-stack Developer who loves to tinker. I don’t just code; I enjoy diving into new tech to see how it can make my work better. For me, good enough isn't enough – I'm all about building high-quality stuff.",
       projects: {
        winnerTech: {
          title: "WinnerTech",
          description: "My small company introduction project is a website and app development company that has both courses and design features.",
          position: "UX/UI Design, Front-End Developer, Develop AI Chat",
          image: "https://i.postimg.cc/d1c8d6Hy/Screen-Shot-2025-08-28-at-21-59-23.png",
          link:"https://www.winnertech.cloud/"

        },
        dearFab: {
            title: "DearFab",
            description: "Is a website of DearFab enterprise. Website for buying and selling paintings made from recycled fabric. In addition to the basic buying and selling functions and Admin management, there is also AI Chat support and online payment function.",
            position: "UX/UI Design, Front-End Developer, Develop AI Chat",
            image: "https://i.postimg.cc/d1QG43Fs/Screen-Shot-2025-08-28-at-22-06-27.png",
            link:"https://www.dearfab.com/"
          },
          hangoutL: {
            title: "Landing HangOut",
            description: "Is a website of HangOut company. Website introduces HangOuts application, suggests entertainment venues",
            position: "Front-End Developer",
            image: "https://iili.io/K3VMGfI.md.png",
            link:"https://landing.hangout.com.vn/"
          },
          hangoutApp: {
            title: "HangOut App",
            description: "An application used to suggest places to have fun for young people, create schedules for fun. See the current hot places to have fun.",
            position: "Front-End Developer",
            image: "https://iili.io/K3b3mo7.png",
            link:"https://apps.apple.com/vn/app/hangout/id6747320890?l=vi"
          },
          winnerGarden: {
            title: "WinnerGarden",
            description: "Is a website used to trade ornamental plants. Allows users to connect with each other through blogs. Admin can manage the garden.",
            position: "Front-End Developer",
            image: "https://iili.io/K3b9CMb.png",
            link:"https://winnergarden.onrender.com"
          },
          ohBauApp: {
            title: "Oh! Bau App",
            description: "An application to manage the health status of the fetus of mother and baby. Besides, there are also prenatal education courses, trading health support products, children's clothing. There is AI to support consultation",
            position: "Front-End Developer",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/55/c7/42/55c7422e-f941-65b9-efeb-1a1feae09b1a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
            link:"https://apps.apple.com/vn/app/ohbau/id6747362141?l=vi"
          },
          broGlow: {
            title: "Landing NEWMWAY",
            description: "This is a landing page for the NEWMWAY TEAKWOOD website and app, aiming to promote the brand, products, and applications of the NEWMWAY company.",
            position: "Front-End Developer, Designer",
            image: "/newmway.png",
            link:"https://landing-newmway.vercel.app/"
          },
          gymRadar: {
            title: "GymRadar",
            description: "GymRadar is a mobile app that connects gyms, personal trainers (PTs) and fitness enthusiasts.",
            position: "Front-End Developer",
            image: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fe/9c/68/fe9c6879-2d03-10f8-6f60-703076c64fca/z6782031988298_2dc32549367e6a360ccae65c3302f003.jpg/313x0w.webp",
            link:"https://apps.apple.com/vn/app/gymradar/id6748238755?l=vi"
          },
          superPanda: {
            title: "Super Panda",
            description: "Super Panda is a website that offers English courses, allowing users to study, take classes, take practice tests,... graded by AI",
            position: "Front-End Developer",
            image: "https://i.ibb.co/ksCZhbW0/Screen-Shot-2025-11-19-at-19-42-36.png",
            link:"https://www.superpanda.com.vn/"
          },
          angiang: {
            title: "An Giang Real Estate",
            description: "This website showcases real estate in the An Giang area, features a 360-degree map, and displays actual sun exposure times.",
            position: "Front-End Developer",
            image: "/Angiang.png",
            link:"https://an-giang-real-estate.vercel.app/"
          },
       thiepcuoi: {
            title: "Online Wedding Invitations",
            description: "This is a website project that allows users to create online wedding invitations and share them with friends.",
            position: "Front-End Developer",
            image: "/Tiemanhrachgia.png",
            link:"https://winner-wedding.vercel.app/"
          },
      },
      qoute:"I have experience working on large and small projects, development and production.",
      languageandfw:"Language Programer & Framework",
      declaration:"Declaration",
      publications:"I am a person who is always dedicated to work, passionate about technology research and programming. I will always work wholeheartedly and wholeheartedly, if you need me, please contact me immediately.",
      resume: {
  title: "RESUME",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  languages: "Languages",
  whatCanIDo: "What Can I Do?",
  educationTitle: "Bachelor of Information Technology",
  university: "FPT University",
  capabilities: "Document • Management • Planning • Design • Coding • Testing • Deploy • Leadership • Problem Solving",
  experiences: {
    exp1: {
      year: "06/2025 - Present",
      company: "WinnerTech",
      role: "Founder"
    },
    exp2: {
      year: "07/2025 - 08/2025",
      company: "DearFab",
      role: "Project Manager, Front-End Developer, Designer"
    },
    exp3: {
      year: "07/2025 - 07/2025",
      company: "LandingPage & App HangOut",
      role: "Project Manager, Front-End Developer, AI Developer"
    },
    exp4: {
      year: "06/2025 - 07/2025",
      company: "Oh!Bau App",
      role: "Project Manager, AI Developer"
    },
    exp5: {
      year: "02/2024 - 12/2024",
      company: "DANST - Sports Facilities System",
      role: "Founder, Front-End & Mobile Developer"
    }
  },
  skillss: {
    design: "Design",
    coding: "Coding",
    testing: "Testing",
    deploy: "Deploy"
  },
  langs: {
    english: "English",
    vietnamese: "Vietnamese"
  }
},
services: {
  subtitle: "Services",
  title: "OUR PACKAGES",
  description: "Choose the perfect package for your business needs. From simple landing pages to complex web applications, we've got you covered.",
  popular: "POPULAR",
  getStarted: "Get Started",
  packages: {
    basic: {
      name: "Basic Package",
      price: "$100",
      unit: "starting from",
      features: [
        "Landing Page Design",
        "Responsive Layout",
          "Free Domain",
        "Basic SEO Optimization",
        "1 Month Support"
      ]
    },
    standard: {
      name: "Standard Package",
      price: "$270",
      unit: "starting from",
      features: [
        "Multi-page Website",
        "Custom Design",
         "Free Domain",
        "Advanced SEO",
        "Admin Dashboard",
        "3 Months Support"
      ]
    },
    premium: {
      name: "Premium Package",
      price: "Contact",
      unit: "starting from",
      features: [
        "Full Web Application",
        "Custom Features",
        "Admin Dashboard",
        "Payment Integration",
        "AI Chatbot",
        "Mobile App (Optional)",
        "6 Months Support"
      ]
    }
  },
  whyChooseUs: {
    title: "Why Choose Us?",
    design: {
      title: "Modern Design",
      description: "We create beautiful, user-friendly interfaces that engage your audience and enhance user experience."
    },
    quality: {
      title: "High Quality",
      description: "Clean code, best practices, and thorough testing ensure your website runs smoothly and efficiently."
    },
    support: {
      title: "Dedicated Support",
      description: "We're here for you even after launch. Get continuous support and maintenance for your project."
    }
  }
},

contact: {
  subtitle: "Get In Touch",
  title: "LET'S WORK TOGETHER",
  description: "Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.",
  directEmail: "Or email me directly at:",
  form: {
    name: "Full Name",
    namePlaceholder: "John Doe",
    email: "Email Address",
    emailPlaceholder: "john@example.com",
    phone: "Phone Number",
    phonePlaceholder: "+1 234 567 8900",
    package: "Select Package",
    selectPackage: "Choose a package...",
    message: "Your Message",
    messagePlaceholder: "Tell me about your project...",
    submit: "Send Message",
    sending: "Sending..."
  },
  successMessage: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
  errorMessage: "Oops! Something went wrong. Please try again or email me directly.",
  learnMore: "Learn More About Me",
},
    }
  },
  vi: {
    translation: {
      welcome: "Chào mừng bạn đến với website của tôi",
      home: "Trang chủ",
      about: "Giới thiệu",
      resume: "Hồ sơ",
      portfolio: "Dự án",
      contactt: "Liên hệ",
      projectsDone:"Dự án đã làm",
       subname:"Lê Quốc",
       lastname:"Thắng",
       aboutMe:"Mình là một Full-stack Developer thích mày mò. Thay vì chỉ làm cho xong việc, mình thích tìm hiểu xem công nghệ mới có gì hay để áp dụng vào dự án. Tiêu chí của mình là sản phẩm làm ra không chỉ chạy tốt mà còn phải chỉn chu.",
       projects: {
        winnerTech: {
          title: "WinnerTech",
          description: "Dự án giới thiệu công ty nhỏ của tôi là một công ty phát triển trang web và ứng dụng có cả tính năng khóa học và thiết kế.",
          position: "UX/UI Design, Front-End Developer, Develop AI Chat",
          image: "https://i.postimg.cc/d1c8d6Hy/Screen-Shot-2025-08-28-at-21-59-23.png",
          link:"https://www.winnertech.cloud/"

        }
        ,
        dearFab: {
            title: "DearFab",
            description: "Là 1 website của doanh nghiệp DearFab. Website mua bán sản phẩm bức tranh được làm từ vải tái chế. Ngoài chức năng mua bán cơ bản và quản lý của Admin còn có chức năng  AI Chat hỗ trợ và thanh toán online.",
            position: "UX/UI Design, Front-End Developer, Develop AI Chat",
            image: "https://i.postimg.cc/d1QG43Fs/Screen-Shot-2025-08-28-at-22-06-27.png",
            link:"https://www.dearfab.com/"
          },
          hangoutL: {
            title: "Landing HangOut",
            description: "Là 1 website của doanh nghiệp HangOut. Website giới thiệu về ứng dụng HangOuts, đề xuất địa điểm giải trí",
            position: "Front-End Developer",
            image: "https://iili.io/K3VMGfI.md.png",
            link:"https://winnergarden.onrender.com"
          },
          hangoutApp: {
            title: "HangOut App",
            description: "Là 1 ứng dụng dùng để gợi ý địa điểm vui chơi cho giới trẻ, tạo lịch trình cho các cuộc vui. Xem được các địa điểm vui chơi đang hot hiện tại",
            position: "Front-End Developer",
            image: "https://iili.io/K3b3mo7.png",
            link:"https://apps.apple.com/vn/app/hangout/id6747320890?l=vi"
          },
          winnerGarden: {
            title: "WinnerGarden",
            description: "Là 1 website dùng để buôn bán cây kiểng lá. Cho phép người dùng có thể kết nối với nhau thông qua blog. Admin có thể quản lý được vườn",
            position: "Front-End Developer",
            image: "https://iili.io/K3b9CMb.png",
            link:"https://winnergarden.onrender.com"
          },
          ohBauApp: {
            title: "Oh! Bau App",
            description: "Ứng dụng quản lý tình trạng sức khoẻ thai nhi của mẹ và bé. Bên cạnh đó còn có các khoá học thai giáo, buôn bán sản phẩm hỗ trợ sức khoẻ, quần áo trẻ em. Có AI hỗ trợ tư vấn",
            position: "Front-End Developer",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/55/c7/42/55c7422e-f941-65b9-efeb-1a1feae09b1a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp",
            link:"https://apps.apple.com/vn/app/ohbau/id6747362141?l=vi"
          },
          broGlow: {
             title: "Landing NEWMWAY",
            description: "Là 1 landing page của website và ứng dụng của NEWMWAY TEAKWOOD, có hiệu ứng 3D, nhằm quảng bá thương hiệu và sản phẩm, ứng dụng của doanh nghiệp NEWMWAY",
            position: "Front-End Developer, Designer",
            image: "/newmway.png",
            link:"https://landing-newmway.vercel.app/"
          },
          gymRadar: {
            title: "GymRadar",
            description: "GymRadar là ứng dụng di động kết nối các phòng tập, huấn luyện viên cá nhân (PT) và những người đam mê thể hình.",
            position: "Front-End Developer",
            image: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fe/9c/68/fe9c6879-2d03-10f8-6f60-703076c64fca/z6782031988298_2dc32549367e6a360ccae65c3302f003.jpg/313x0w.webp",
            link:"https://apps.apple.com/vn/app/gymradar/id6748238755?l=vi"
          },
          superPanda: {
            title: "Super Panda",
            description: "Super Panda là 1 website có các khoá học tiếng anh, cho phép người dùng có thể học, tham gia lớp học, thi thử,... chấm bài bằng AI",
            position: "Front-End Developer",
            image: "https://i.ibb.co/ksCZhbW0/Screen-Shot-2025-11-19-at-19-42-36.png",
            link:"https://www.superpanda.com.vn/"
          },
           angiang: {
            title: "Bất Động Sản An Giang",
            description: "Website giới thiệu bất động sản của khu vực An Giang, Có xem map 360 độ và xem được thời gian đỗ nắng thực tế",
            position: "Front-End Developer",
            image: "/Angiang.png",
            link:"https://an-giang-real-estate.vercel.app/"
          },
          thiepcuoi: {
            title: "Online Wedding Invitations",
            description: "Là 1 dự án website cho phép người dùng sử dụng để tạo ra thiệp cưới online, có thể chia sẽ cho bạn bè",
            position: "Front-End Developer",
            image: "/Tiemanhrachgia.png",
            link:"https://winner-wedding.vercel.app/"
          },
        },
        qoute:"Tôi đã có kinh nghiệm làm các dự án lớn, nhỏ, môi trường phát triển và sản xuất",
        languageandfw:"Các Ngôn ngữ lập trình và Framework",
        declaration:"Lời Tuyên Bố",
        publications:"Tôi là 1 người luôn hết mình với công việc, đam mê nghiên cứu công nghệ, lập trình. Tôi sẽ luôn làm việc tận tâm và hết mình, nếu bạn cần tôi hãy liên hệ với tôi ngay",
        resume: {
  title: "HỒ SƠ",
  experience: "Kinh nghiệm",
  education: "Học vấn",
  skills: "Kỹ năng",
  languages: "Ngôn ngữ",
  whatCanIDo: "Tôi có thể làm gì?",
  educationTitle: "Cử nhân Công nghệ Thông tin",
  university: "Đại học FPT",
  capabilities: "Tài liệu • Quản lý • Lập kế hoạch • Thiết kế • Lập trình • Kiểm thử • Triển khai • Lãnh đạo • Giải quyết vấn đề",
  experiences: {
    exp1: {
      year: "06/2025 - Hiện tại",
      company: "WinnerTech",
      role: "Giám Đốc"
    },
    exp2: {
      year: "07/2025 - 08/2025",
      company: "DearFab",
      role: "Quản lý dự án, Lập trình viên Front-End, Thiết kế"
    },
    exp3: {
      year: "07/2025 - 07/2025",
      company: "LandingPage & App HangOut",
      role: "Quản lý dự án, Lập trình viên Front-End, Phát triển AI"
    },
    exp4: {
      year: "06/2025 - 07/2025",
      company: "Oh!Bau App",
      role: "Quản lý dự án, Phát triển AI"
    },
    exp5: {
      year: "02/2024 - 12/2024",
      company: "DANST - Hệ thống Cơ sở Thể thao",
      role: "Người sáng lập, Lập trình viên Front-End & Mobile"
    }
  },
  skillss: {
    design: "Thiết kế",
    coding: "Lập trình",
    testing: "Kiểm thử",
    deploy: "Triển khai"
  },
  langs: {
    english: "Tiếng Anh",
    vietnamese: "Tiếng Việt"
  }
},
services: {
  subtitle: "Dịch Vụ",
  title: "CÁC GÓI DỊCH VỤ",
  description: "Chọn gói dịch vụ phù hợp với nhu cầu doanh nghiệp của bạn. Từ landing page đơn giản đến ứng dụng web phức tạp, chúng tôi đều có thể làm được.",
  popular: "PHỔ BIẾN",
  getStarted: "Bắt đầu",
  packages: {
    basic: {
      name: "Gói Cơ Bản",
      price: "2.599.000đ",
      unit: "Dành cho website giới thiệu",
      features: [
        "Thiết kế Landing Page",
        "Giao diện Responsive",
        "Miễn Phí tên miền",
        "SEO cơ bản",
        "Hỗ trợ 1 tháng"
      ]
    },
    standard: {
      name: "Gói Tiêu Chuẩn",
      price: "6.999.000đ",
      unit: "Dành cho các website bán hàng, booking,...",
      features: [
        "Website nhiều trang",
        "Thiết kế tùy chỉnh",
         "Miễn Phí tên miền",
        "SEO nâng cao",
       "Trang quản trị Admin",
        "Hỗ trợ 3 tháng"
      ]
    },
    premium: {
      name: "Gói Cao Cấp",
      price: "Liên Hệ",
      unit: "Các Website, Ứng dụng cao cấp, phức tạp",
      features: [
        "Ứng dụng Web đầy đủ",
        "Tính năng tùy chỉnh",
        "Trang quản trị Admin",
        "Tích hợp thanh toán",
        "AI Chatbot",
        "Ứng dụng Mobile (Tùy chọn)",
        "Hỗ trợ 6 tháng"
      ]
    }
  },
  whyChooseUs: {
    title: "Tại sao chọn chúng tôi?",
    design: {
      title: "Thiết kế Hiện đại",
      description: "Chúng tôi tạo ra giao diện đẹp mắt, thân thiện với người dùng, thu hút khách hàng và nâng cao trải nghiệm."
    },
    quality: {
      title: "Chất lượng Cao",
      description: "Code sạch, tuân thủ best practices và kiểm thử kỹ lưỡng đảm bảo website hoạt động mượt mà và hiệu quả."
    },
    support: {
      title: "Hỗ trợ Tận tâm",
      description: "Chúng tôi luôn ở đây ngay cả sau khi ra mắt. Nhận được hỗ trợ và bảo trì liên tục cho dự án của bạn."
    }
  }
},

contact: {
  subtitle: "Liên Hệ",
  title: "HÃY LÀM VIỆC CÙNG NHAU",
  description: "Có dự án trong đầu? Điền vào form bên dưới và tôi sẽ phản hồi bạn sớm nhất có thể.",
  directEmail: "Hoặc gửi email trực tiếp đến:",
  form: {
    name: "Họ và Tên",
    namePlaceholder: "Nguyễn Văn A",
    email: "Địa chỉ Email",
    emailPlaceholder: "example@gmail.com",
    phone: "Số điện thoại",
    phonePlaceholder: "+84 123 456 789",
    package: "Chọn Gói",
    selectPackage: "Chọn một gói dịch vụ...",
    message: "Tin nhắn của bạn",
    messagePlaceholder: "Hãy cho tôi biết về dự án của bạn...",
    submit: "Gửi tin nhắn",
    sending: "Đang gửi..."
  },
  successMessage: "Cảm ơn bạn! Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi bạn sớm.",
  errorMessage: "Rất tiếc! Đã có lỗi xảy ra. Vui lòng thử lại hoặc gửi email trực tiếp cho tôi.",
  learnMore: "Tìm hiểu thêm về tôi",
}
      }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
