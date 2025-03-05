import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Hi, I'm Deep Tayade
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer who thrives on building sleek, scalable web applications. 
            I strive to create solutions that blend innovation with seamless user experiences.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transform hover:-translate-y-1"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-purple-400 text-purple-300 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:bg-purple-600 hover:border-purple-500 hover:text-white shadow-lg transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
