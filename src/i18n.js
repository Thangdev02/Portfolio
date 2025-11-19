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
      contact: "Contact",
      projectsDone:"Projects",
       subname:"Le Quoc",
       lastname:"Thang",
       aboutMe:"I am a dedicated software developer with a strong passion for exploring and researching new technologies. With the ability to work on both front-end and back-end development, I strive to deliver clean, efficient, and scalable solutions. I enjoy continuous learning, take pride in hard work, and always aim to create high-quality digital products.",
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
            title: "BroGlow",
            description: "BroGlow is a groundbreaking mobile app that is redefining the men's skincare market. By leveraging cutting-edge AI and machine learning technology",
            position: "Front-End Developer",
            image: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/41/aa/84/41aa848e-5349-12d0-9071-3726b55cc504/Simulator_Screenshot_-_iPad_Pro_13-inch__U0028M4_U0029_-_2025-07-31_at_22.21.59.png/313x0w.webp",
            link:"https://apps.apple.com/vn/app/broglow/id6748694221?l=vi"
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
      
      },
      qoute:"I have experience working on large and small projects, development and production.",
      languageandfw:"Language Programer & Framework",
      declaration:"Declaration",
      publications:"I am a person who is always dedicated to work, passionate about technology research and programming. I will always work wholeheartedly and wholeheartedly, if you need me, please contact me immediately."

    }
  },
  vi: {
    translation: {
      welcome: "Chào mừng bạn đến với website của tôi",
      home: "Trang chủ",
      about: "Giới thiệu",
      resume: "Hồ sơ",
      portfolio: "Dự án",
      contact: "Liên hệ",
      projectsDone:"Dự án đã làm",
       subname:"Lê Quốc",
       lastname:"Thắng",
       aboutMe:"Tôi là một nhà phát triển phần mềm tận tụy với niềm đam mê khám phá và nghiên cứu các công nghệ mới. Với khả năng làm việc trên cả front-end và back-end, tôi luôn nỗ lực trau dồi và học hỏi. Tôi thích nghiên cứu những thứ mới và luôn hướng tới việc tạo ra các sản chất lượng cao.",
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
            title: "BroGlow",
            description: "BroGlow là một ứng dụng di động đột phá, định hình lại thị trường chăm sóc da dành cho nam giới. Bằng cách tận dụng công nghệ AI và học máy tiên tiến.",
            position: "Front-End Developer",
            image: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/41/aa/84/41aa848e-5349-12d0-9071-3726b55cc504/Simulator_Screenshot_-_iPad_Pro_13-inch__U0028M4_U0029_-_2025-07-31_at_22.21.59.png/313x0w.webp",
            link:"https://apps.apple.com/vn/app/broglow/id6748694221?l=vi"
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
        },
        qoute:"Tôi đã có kinh nghiệm làm các dự án lớn, nhỏ, môi trường phát triển và sản xuất",
        languageandfw:"Các Ngôn ngữ lập trình và Framework",
        declaration:"Lời Tuyên Bố",
        publications:"Tôi là 1 người luôn hết mình với công việc, đam mê nghiên cứu công nghệ, lập trình. Tôi sẽ luôn làm việc tận tâm và hết mình, nếu bạn cần tôi hãy liên hệ với tôi ngay"

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
