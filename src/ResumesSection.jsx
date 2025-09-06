import { FaBook, FaCamera, FaPaintBrush, FaPlane } from "react-icons/fa";

const ResumeSection = () => {
  const softwareSkills = [
    { name: "Design", level: 90 },
    { name: "Coding", level: 80 },
    { name: "Testing", level: 70 },
    { name: "Deploy", level: 80 },
  ];

  const languages = [
    { name: "English", level: 70 },
    { name: "Vietnamese", level: 100 },
  ];

  const experiences = [
    { year: "06/2025 - Present", role: "Project Manager, Front-End Developer, Designer", company: "WinnerTech" },
    { year: "07/2025 - 08/2025", role: "Project Manager, Front-End Developer, Designer", company: "DearFab" },
    { year: "07/2025 - 07/2025", role: "Project Manager, Front-End Developer,AI Developer", company: "LandingPage HangOut and App HangOut" },
    { year: "06/2025 - 07/2025", role: "Project Manager, AI Developer", company: "Oh!Bau App" },
    { year: "02/2024 - 12/2024", role: "Founder, Font-end Developer, Mobile Developer", company: "DANST - Sports Facilities Management, Searching And Reservation System." },
  ];

  const hobbies = [
    { icon: <FaBook />, label: "Reading" },
    { icon: <FaCamera />, label: "Photography" },
    { icon: <FaPaintBrush />, label: "Drawing" },
    { icon: <FaPlane />, label: "Travel" },
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-card text-gray-100" style={{ fontFamily: "Montserrat" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT COLUMN */}
        

        {/* MIDDLE COLUMN */}
        <div>
          <h3 className="text-xl font-bold uppercase  border-orange-500 inline-block mb-6">
            Experience
          </h3>
          <div className="relative border-l-2 border-gray-700 pl-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="mb-6 relative">
                {/* Dot */}
                <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center ring-4 ring-black">
                  <span className="text-black text-[10px]">●</span>
                </div>
                <span className="text-sm text-gray-400">{exp.year}</span>
                <h4 className="font-semibold text-lg text-white">{exp.company}</h4>
                <p className="text-sm text-orange-400">{exp.role}</p>
              </div>
            ))}
          </div>

         
        </div>
        <div className="space-y-10">
          {/* Software Skills */}
          <div>
            <h3 className="text-xl font-bold uppercase  border-orange-500 inline-block mb-4">
              Software Skills
            </h3>
            {softwareSkills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span className="text-orange-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold uppercase  border-orange-500 inline-block mb-4">
              Languages
            </h3>
            {languages.map((lang, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{lang.name}</span>
                  <span className="text-orange-400">{lang.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal Skills */}
          <div>
            <h3 className="text-md font-bold uppercase  border-orange-500 inline-block mb-2">
              Personal Skills
            </h3>
            <p className="text-sm text-gray-400">
              Management • Creativity • Team Work • Organisation • Self Motivation
            </p>
          </div>
         
        </div>
        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          {/* What can I do */}
          <div>
            <h3 className="text-xl font-bold uppercase  border-orange-500 inline-block mb-2">
              What Can I Do?
            </h3>
            <p className="text-sm text-gray-300">
              Document • Management • Planing • Design • Coding • Testing • Deploy 
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold uppercase  border-orange-500 inline-block mb-2">
              Education
            </h3>
            <p className="font-semibold">Degree of Bachelor in Information Tecnology</p>
            <p className="text-sm text-gray-400">FPT University</p>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-xl font-bold uppercase  border-orange-500 inline-block mb-4">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {hobbies.map((hobby, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center hover:scale-105 transition-transform"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-orange-400 text-2xl mb-2 hover:bg-orange-500 hover:text-white transition">
                    {hobby.icon}
                  </div>
                  <span className="text-sm">{hobby.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
