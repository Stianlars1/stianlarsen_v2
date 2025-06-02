// src/components/seo/HiddenSeoContent/HiddenSeoContent.tsx
import {ME} from "@/data/about_me/me";
import styles from "./HiddenSeoContent.module.css";

export const HiddenSeoContent = () => {
    return (
        <section className={styles.seoContent} aria-hidden="true">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Stian Larsen - Full Stack Web Developer Oslo Norway
                </h2>
                <p className={styles.description}>
                    Stian Larsen is a passionate and experienced Full Stack Web Developer based in Oslo, Norway.
                    With over 2 years of professional experience at SpareBank 1 Utvikling and a Bachelor&apos;s degree
                    in Computer Science, Stian specializes in creating innovative web applications using modern
                    technologies including TypeScript, React, Next.js, Kotlin, Spring Boot, and PostgreSQL.
                </p>

                <h3 className={styles.sectionTitle}>
                    Professional Full Stack Developer Skills and Expertise
                </h3>
                <ul className={styles.featuresList}>
                    <li className={styles.feature}>
                        Frontend Development: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, SCSS
                    </li>
                    <li className={styles.feature}>
                        Backend Development: Kotlin, Spring Boot, Node.js, Express.js, REST APIs
                    </li>
                    <li className={styles.feature}>
                        Database Management: PostgreSQL, Firebase, Supabase, SQL optimization
                    </li>
                    <li className={styles.feature}>
                        Cloud Services: AWS Lightsail, Google Cloud Storage, Vercel deployment
                    </li>
                    <li className={styles.feature}>
                        Development Tools: Git, WebStorm, IntelliJ IDEA, Agile methodologies
                    </li>
                    <li className={styles.feature}>
                        UI/UX Design: Figma, responsive web design, mobile-first development
                    </li>
                </ul>

                <h3 className={styles.sectionTitle}>
                    Featured Web Development Projects by Stian Larsen
                </h3>
                <ul className={styles.projectsList}>
                    <li className={styles.project}>
                        <strong className={styles.projectName}>TaskBuddy.dev - Task Management Application</strong>
                        <span className={styles.projectDescription}>
              Full-stack task management application built with Next.js, TypeScript, Kotlin, Spring Boot,
              and PostgreSQL. Features custom JWT authentication, AWS hosting, and Google Cloud integration.
            </span>
                    </li>
                    <li className={styles.project}>
                        <strong className={styles.projectName}>Tinify.dev - Advanced Image Optimization Service</strong>
                        <span className={styles.projectDescription}>
              Powerful image compression and optimization tool using Kotlin/Spring Boot backend with
              ImageMagick processing, Next.js frontend, and AWS Lightsail deployment.
            </span>
                    </li>
                    <li className={styles.project}>
                        <strong className={styles.projectName}>QR-kode.app - Custom QR Code Generator</strong>
                        <span className={styles.projectDescription}>
              Free QR code generation platform built with Next.js, TypeScript, Supabase, and Tailwind CSS
              for Norwegian and international users.
            </span>
                    </li>
                    <li className={styles.project}>
                        <strong className={styles.projectName}>Skipper&apos;n Utleie - Boat Rental Platform</strong>
                        <span className={styles.projectDescription}>
              Complete boat rental management system with Firebase backend, admin dashboard,
              inventory management, and customer booking system.
            </span>
                    </li>
                    <li className={styles.project}>
                        <strong className={styles.projectName}>AudioVisualizer.io - Audio Visualization
                            Platform</strong>
                        <span className={styles.projectDescription}>
              Online platform for uploading and visualizing audio files with React, TypeScript,
              Node.js, and Wavesurfer.js integration.
            </span>
                    </li>
                </ul>

                <h3 className={styles.sectionTitle}>
                    Open Source Contributions and NPM Packages
                </h3>
                <p className={styles.description}>
                    Stian Larsen is an active open source developer with 8+ published NPM packages downloaded
                    thousands of times by developers worldwide. Packages include React UI components, development
                    tools, and utility libraries for modern web development.
                </p>
                <ul className={styles.packagesList}>
                    <li className={styles.package}>
                        @stianlarsen/react-ui-kit - Comprehensive React UI component library
                    </li>
                    <li className={styles.package}>
                        @stianlarsen/copy-to-clipboard - Modern clipboard utility for web applications
                    </li>
                    <li className={styles.package}>
                        @stianlarsen/react-code-preview - Code preview component with syntax highlighting
                    </li>
                    <li className={styles.package}>
                        @stianlarsen/react-light-beam - Animated light beam React component
                    </li>
                    <li className={styles.package}>
                        @stianlarsen/border-beam - CSS border animation component
                    </li>
                    <li className={styles.package}>
                        @stianlarsen/meteors - Meteor animation effect for React
                    </li>
                    <li className={styles.package}>
                        @stianlarsen/react-fade-effects - Fade animation components
                    </li>
                    <li className={styles.package}>
                        react-gradient-animation - Animated gradient background component
                    </li>
                </ul>

                <h3 className={styles.sectionTitle}>
                    Professional Experience at SpareBank 1 Utvikling Oslo
                </h3>
                <p className={styles.description}>
                    Currently working as a Full Stack Developer at SpareBank 1 Utvikling in Oslo, Norway,
                    where Stian contributes to Team Overview, building critical front-end and back-end services
                    for Norway&apos;s leading bank. Responsibilities include React/TypeScript frontend development,
                    Kotlin/Spring Boot backend services, AWS cloud deployment, and agile development practices.
                </p>

                <h3 className={styles.sectionTitle}>
                    Web Development Services Oslo Norway
                </h3>
                <p className={styles.description}>
                    Available for freelance web development projects, consulting, and custom software development.
                    Specializing in full-stack web applications, e-commerce platforms, business management systems,
                    and modern web development solutions for Norwegian and international clients.
                </p>

                <h3 className={styles.sectionTitle}>
                    Education and Technical Background
                </h3>
                <p className={styles.description}>
                    Bachelor&apos;s degree in Computer Science with focus on software engineering, web development,
                    and modern programming practices. Self-taught in many technologies with passion for
                    continuous learning and staying current with industry trends and best practices.
                </p>

                <h3 className={styles.sectionTitle}>
                    Technologies and Programming Languages
                </h3>
                <p className={styles.description}>
                    Expert-level proficiency in TypeScript, JavaScript, React, Next.js, HTML5, CSS3, SCSS.
                    Backend development with Kotlin, Spring Boot, Node.js, Express.js. Database design and
                    optimization with PostgreSQL, Firebase, Supabase. Cloud deployment and DevOps with AWS,
                    Google Cloud, Vercel. Version control with Git and GitHub.
                </p>

                <h3 className={styles.sectionTitle}>
                    Contact Stian Larsen - Full Stack Developer Oslo
                </h3>
                <p className={styles.description}>
                    Get in touch for web development projects, collaboration opportunities, or professional inquiries.
                    Email: {ME.email} | Phone: {ME.phoneNumberString} | Location: {ME.location} |
                    GitHub: https://github.com/Stianlars1 | LinkedIn: https://www.linkedin.com/in/stianlars1
                </p>

                <div className={styles.keywordCloud}>
                    <span className={styles.keyword}>Stian Larsen</span>
                    <span className={styles.keyword}>Full Stack Developer Oslo</span>
                    <span className={styles.keyword}>Web Developer Norway</span>
                    <span className={styles.keyword}>TypeScript Developer</span>
                    <span className={styles.keyword}>React Developer Oslo</span>
                    <span className={styles.keyword}>Next.js Developer Norway</span>
                    <span className={styles.keyword}>Kotlin Spring Boot Developer</span>
                    <span className={styles.keyword}>Frontend Developer Oslo</span>
                    <span className={styles.keyword}>Backend Developer Norway</span>
                    <span className={styles.keyword}>Norwegian Software Engineer</span>
                    <span className={styles.keyword}>TaskBuddy Creator</span>
                    <span className={styles.keyword}>Tinify Developer</span>
                    <span className={styles.keyword}>SpareBank 1 Developer</span>
                    <span className={styles.keyword}>Oslo Web Development</span>
                    <span className={styles.keyword}>Norway Software Development</span>
                    <span className={styles.keyword}>Freelance Developer Norway</span>
                    <span className={styles.keyword}>React TypeScript Expert</span>
                    <span className={styles.keyword}>AWS Cloud Developer</span>
                    <span className={styles.keyword}>PostgreSQL Developer</span>
                    <span className={styles.keyword}>Open Source Developer</span>
                    <span className={styles.keyword}>NPM Package Author</span>
                    <span className={styles.keyword}>Computer Science Graduate</span>
                    <span className={styles.keyword}>Agile Development</span>
                    <span className={styles.keyword}>UI/UX Developer</span>
                    <span className={styles.keyword}>Mobile First Development</span>
                    <span className={styles.keyword}>Responsive Web Design</span>
                    <span className={styles.keyword}>Modern Web Development</span>
                    <span className={styles.keyword}>Full Stack Portfolio</span>
                    <span className={styles.keyword}>Professional Developer Portfolio</span>
                    <span className={styles.keyword}>Norwegian Tech Professional</span>
                    <span className={styles.keyword}>utvikler oslo</span>
                    <span className={styles.keyword}>webutvikler norge</span>
                    <span className={styles.keyword}>programvareutvikler oslo</span>
                    <span className={styles.keyword}>fullstack utvikler</span>
                    <span className={styles.keyword}>JAMstack Developer</span>
                    <span className={styles.keyword}>Serverless Developer</span>
                    <span className={styles.keyword}>REST API Developer</span>
                    <span className={styles.keyword}>GraphQL Developer Norway</span>
                    <span className={styles.keyword}>DevOps Developer Oslo</span>
                    <span className={styles.keyword}>hire full stack developer norway</span>
                    <span className={styles.keyword}>best web developer oslo</span>
                    <span className={styles.keyword}>professional website development norway</span>
                    <span className={styles.keyword}>custom software development oslo</span>
                    <span className={styles.keyword}>react development services norway</span>
                    <span className={styles.keyword}>typescript consulting norway</span>
                </div>
            </div>
        </section>
    );
};