function About() {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>

      <p className="about-summary">
        I am a passionate developer specializing in Embedded Systems,
        AI-powered healthcare solutions, IoT automation, and full-stack
        web development. I build real-world intelligent systems combining
        hardware and software.
      </p>

      <div className="about-grid">

        {/* Education */}
        <div className="about-card">
          <h3>🎓 Education</h3>
          <h4>B.Voc IT – Data Science & IoT</h4>
          <p>Christ College (Autonomous), Irinjalakuda</p>
        </div>

        {/* Work Experience 1 */}
        <div className="about-card">
          <h3>💼 Work Experience</h3>
          <h4>Research & Development Intern</h4>
          <p>BirdEye Technologies LLP, Calicut (NIT)</p>
          <ul>
            <li>Research & Development in Automatic Water Level Controller</li>
            <li>Designed system to optimize water usage & prevent overflow</li>
            <li>Developed embedded monitoring logic using IoT concepts</li>
          </ul>
        </div>

        {/* Work Experience 2 */}
        <div className="about-card">
          <h3>💻 Software & Web Development</h3>
          <h4>Christ College (Autonomous), Irinjalakuda</h4>
          <ul>
            <li>Web Application Development</li>
            <li>Full-Stack System Design</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;