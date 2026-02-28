function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Enosh <span>Yaffat</span>
        </h1>

        <h3 className="hero-tagline">
          Software & Web Application Developer
        </h3>

        <p className="hero-desc">
          I design intelligent systems combining AI, Embedded Systems,
          IoT automation and full-stack web development to build
          scalable real-world solutions.
        </p>

        <div className="hero-badges">
          <span>AI</span>
          <span>IoT</span>
          <span>Embedded</span>
          <span>Full Stack</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>

        <div className="hero-stats">
          <div>
            <h4>8+</h4>
            <p>Major Projects</p>
          </div>
          <div>
            <h4>AI + IoT</h4>
            <p>Specialization</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-glow-box"></div>
      </div>

    </section>
  );
}

export default Hero;