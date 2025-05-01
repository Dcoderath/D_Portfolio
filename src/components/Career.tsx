import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My academic projects
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Screenshot and Video to Code Converter</h4>
                <h5>Self-initiated Project</h5>
              </div>
              <h3>Feb 2024</h3>
            </div>
            <p>
              Designed a tool to convert screenshots or screen recordings of UI designs into HTML/CSS/JS code snippets. 
              Used OpenCV and Tesseract.js for image preprocessing and OCR. Implemented video frame extraction and pattern matching to identify UI components. 
              Integrated code generation logic using Node.js backend with a React-based frontend. Potential use cases include rapid prototyping and legacy UI migration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>E-Commerce Web Application</h4>
                <h5>Self-initiated Project</h5>
              </div>
              <h3>Aug 2024</h3>
            </div>
            <p>
              Built a full-stack responsive eCommerce platform with React, Vite, Firebase, MongoDB, and Express.js. 
              Integrated 3D product views using Three.js and interactive animations via GSAP. Focused on scalability, responsiveness, and optimized performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
