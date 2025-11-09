import Layout from '../../components/Layout'
import styles from '../../styles/About.module.css'
import { FaLinkedin, FaMedium } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

const About = () => {
  const meta = {
    title: 'About Kiran Dhobale',
    description: 'Senior Frontend Engineer with 7+ years of experience in web development',
    date: '2025-09-25',
    readTime: 3
  }

  return (
    <Layout 
      pageTitle={meta.title}
      description={meta.description}
      showHeader={true}
    >
      <div className={styles.aboutContainer}>
        <section className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.profileHeader}>
            <div className={styles.imageWrapper}>
              <img
                src="/kiran-img.jpg"
                alt="Kiran Dhobale"
                className={styles.profileImage}
                onError={(e) => {
                  console.error('Image failed to load');
                  e.target.src = '/placeholder.png';
                }}
              />
            </div>
            <div>
              Thanks to <a href="https://ryandsouza.in/about" target="_blank" rel="noopener noreferrer">Ryan D'Souza</a> being a great mentor and inspiring me to create my own website.
            </div>
            <div className={styles.introText}>
              <h1>About Me</h1>
              <p>
                Hi, I'm Kiran Dhobale (formerly Deshmukh), a result-oriented Senior Frontend Engineer with 7+ years of experience 
                in web development. I believe in creating a positive impact in the workplace through technical excellence 
                and collaborative leadership.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Professional Summary</h2>
          <div className={styles.strengthFinder}>
            <h3>Core Strengths</h3>
            <ul>
              <li>Software Development</li>
              <li>Maintain Code Quality</li>
              <li>Communication</li>
              <li>Team player</li>
              <li>Proactive</li>
            </ul>
          </div>
          <p>
            A highly organized and self-motivated software engineer with strong computer science fundamentals. 
            Experienced in communicating complex technical requirements to non-technical stakeholders and 
            delivering impactful solutions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Technical Expertise</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Frontend Development</h3>
              <ul>
                <li>JavaScript/TypeScript</li>
                <li>ReactJs & Redux/Reflux</li>
                <li>Web Components/Lit Elements</li>
                <li>MicroFrontend Architecture</li>
                <li>Material UI</li>
                <li>SCSS/Tailwind CSS</li>
                <li>Git/Version Control</li>
              </ul>
            </div>

            <div className={styles.skillCard}>
              <h3>Backend Tools</h3>
              <ul>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
                <li>Jenkins</li>
                <li>Linux Systems</li>
                <li>Postman API Testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Professional Journey</h2>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <h3>Connectwise</h3>
              <strong>Senior Frontend Engineer - Present</strong>
              <ul>
                <li>Leading large-scale frontend applications using MicroFrontend architecture</li>
                <li>Building scalable and maintainable frontend solutions</li>
                <li>Technologies: ReactJs, Redux, TypeScript, Material UI</li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <h3>Helpshift Technologies Pvt Ltd</h3>
              <strong>Frontend Developer 2 (Aug 2022 - Present)</strong>
              <ul>
                <li>Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity</li>
                <li>Demonstrated respect, friendliness and willingness to help wherever needed</li>
                <li>Maintained energy and enthusiasm in fast-paced environment</li>
                <li>Developed AI-based application during hackathon, leading the team to victory</li>
                <li>Technologies: ReactJs, Reflux, SCSS, Web Components, Jenkins</li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <h3>Josh Software, Inc.</h3>
              <strong>Senior Software Engineer (May 2021 - Jul 2022)</strong>
              <ul>
                <li>Worked with project managers, developers, QA and customers for new features & issue resolution</li>
                <li>Conducted ReactJS training for 6 new joiners and interns</li>
                <li>Mentored 3 junior developers</li>
                <li>Technologies: JavaScript, ReactJs, Redux, Git, Ruby, Ruby on Rails, PostgreSQL</li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <h3>Josh Software Inc.</h3>
              <strong>Software Development Engineer (Jun 2017 - Apr 2021)</strong>
              <ul>
                <li>Developed web applications in Entertainment, Online Vehicle Bidding, and Cloud domains</li>
                <li>Collaborated on all stages of SDLC from requirement gathering to production releases</li>
                <li>Updated legacy codebases to modern development standards</li>
                <li>Documented technical workflows to educate newly hired employees</li>
                <li>Collaborated with project managers to set realistic coding milestones</li>
                <li>Technologies: JavaScript, ReactJs, Redux, Git, Ruby on Rails, Docker, PostgreSQL, CSS</li>
              </ul>
            </div>

            <div className={styles.experienceCard}>
              <h3>Josh Software, Inc.</h3>
              <strong>Software Development Intern (Jan 2017 - May 2017)</strong>
              <ul>
                <li>Developed web application in Food delivery domain</li>
                <li>Worked closely with peers to identify and resolve issues</li>
                <li>Tested user defined functions and triggers</li>
                <li>Technologies: Ruby on Rails, Git, Docker, PostgreSQL, CSS, Heroku</li>
              </ul>
            </div>
          </div>
        </section>



        <section className={styles.section}>
          <h2>Education</h2>
          <div className={styles.educationCard}>
            <h3>B.Tech. in Computer Science<br />and Engineering</h3>
            <p>Walchand College of Engineering, Sangli</p>
            <p>Worked as Technical Adviser for Walchand Linux Users' Group</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.closing}`}>
          <p>
            Always excited to learn new technologies and tackle challenging projects that push the
            boundaries of what's possible. Feel free to reach out if you'd like to connect or 
            discuss opportunities!
          </p>
          <div className={styles.contactInfo}>
            <a 
              href="https://www.linkedin.com/in/kiranbdeshmukh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FaLinkedin className={styles.icon} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:kirandeshmukh1495@gmail.com"
              className={styles.contactLink}
            >
              <MdEmail className={styles.icon} />
              <span>Email</span>
            </a>
            <a 
              href="https://medium.com/@kiranbdesh123"
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FaMedium className={styles.icon} />
              <span>Blog</span>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
