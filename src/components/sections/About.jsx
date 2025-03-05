import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "Vite", "CSS", "HTML"];
  const backendSkills = ["Node.js", "JavaScript", "React", "Java", "AI/ML"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* About Card */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm <span className="text-blue-400 font-semibold">Deep Tayade</span>, a final-year Computer Engineering student at 
              Sandip Foundation SITRC Nashik. Passionate about{" "}
              <span className="text-blue-400">full-stack development</span> and{" "}
              <span className="text-purple-400">AI-driven solutions</span>, I have hands-on experience with the MERN stack,
              React, and data-driven projects.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-gray-900/80 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/30 transition">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-300 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                      hover:shadow-lg transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-gray-900/80 border border-gray-700 hover:shadow-lg hover:shadow-blue-500/30 transition">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-lg transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl bg-gray-800/80 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/30 transition">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="text-white">B.E. in Computer Engineering</strong> - SITRC Nashik (SPPU Pune)
                  <span className="block text-sm text-gray-400">(2021-2025)</span>
                </li>
                <li className="text-gray-400">
                  Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl bg-gray-800/80 border border-gray-700 hover:shadow-lg hover:shadow-blue-500/30 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">Outlier.ai (2024 - Present)</h4>
                  <p className="text-gray-400">
                    Fine-tuned state-of-the-art models and optimized AI responses.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Intern at Cognifyz Technologies (2024)</h4>
                  <p className="text-gray-400">
                    Developed multiple projects, handled frontend & backend, and built REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
