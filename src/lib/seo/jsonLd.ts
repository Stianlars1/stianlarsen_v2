export const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://stianlarsen.com#person",
      name: "Stian Larsen",
      givenName: "Stian",
      familyName: "Larsen",
      jobTitle: "Full Stack Web Developer",
      description:
        "I\u2019m Stian, a passionate full stack web developer based in Norway, currently crafting innovative solutions at SpareBank 1 Utvikling. With a Bachelor\u2019s degree in Computer Science and over two years of hands-on experience from professional roles and personal projects, I thrive at the intersection of design and backend engineering.",
      url: "https://stianlarsen.com",
      image: "https://stianlarsen.com/stian/STIAN_PHOTO.jpg",
      sameAs: [
        "https://github.com/Stianlars1",
        "https://www.linkedin.com/in/stianlars1",
        "https://www.instagram.com/stianlarsen",
        "https://www.x.com/litehode",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://stianlarsen.com#website",
      name: "Stian Larsen Portfolio",
      url: "https://stianlarsen.com",
      description:
        "Professional portfolio of Stian Larsen, Full Stack Web Developer from Oslo, Norway. Showcasing web development projects, open source contributions, and professional experience.",
      author: { "@id": "https://stianlarsen.com#person" },
      publisher: { "@id": "https://stianlarsen.com#person" },
    },
    {
      "@type": "WebPage",
      "@id": "https://stianlarsen.com#homepage",
      name: "Stian Larsen | Full Stack Web Developer",
      url: "https://stianlarsen.com",
      description:
        "I\u2019m Stian, a passionate full stack web developer based in Norway, currently crafting innovative solutions at SpareBank 1 Utvikling.",
      isPartOf: { "@id": "https://stianlarsen.com#website" },
      author: { "@id": "https://stianlarsen.com#person" },
      mainEntity: { "@id": "https://stianlarsen.com#person" },
    },
    {
      "@type": "WebApplication",
      name: "CSS Variables Assistant - JetBrains Plugin",
      url: "https://www.css-variables-assistant.dev",
      description:
        "Advanced CSS custom properties plugin for JetBrains IDEs (IntelliJ/WebStorm/PyCharm, etc.) with intelligent autocomplete, live preview, and multi-preprocessor support.",
      datePublished: "2025-05-16",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "Sonio: Advanced Music Platform, just like SoundCloud",
      url: "https://sonio.fm",
      description:
        "Developed Sonio, a free web-based music platform that allows users to upload, share, and discover music. Built a robust backend in Kotlin + Spring Boot handling custom authentication and data retrieval, utilizing Postgres and AWS S3 for efficient data storage and retrieval. Implemented advanced audio processing tools using WaveSurfer.js for seamless audio playback and waveform visualization. Created a responsive frontend with Next.js and TypeScript, focusing on a clean and intuitive UI. Deployed the app on AWS Lightsail for scalability and security, designing all UI components from scratch for a user-friendly experience.",
      datePublished: "2025-02-01",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "ColorPalette: Create beautiful color palettes with instant code export",
      url: "https://colorpalette.dev",
      description:
        "Created ColorPalette, a web application that allows users to generate beautiful color palettes and export them as code snippets for various programming languages.",
      datePublished: "2024-12-24",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "Tinify: Advanced Image Optimization Service",
      url: "https://tinify.dev",
      description:
        "Developed Tinify, a free web-based image optimization service that compresses, resizes, and crops images to reduce file sizes and enhance website performance. Built a robust backend in Kotlin and Spring Boot, using tools like ImageMagick, pngquant, cjpeg, etc., for efficient image manipulation. Created a responsive frontend with Next.js and TypeScript for seamless UX, and deployed on AWS Lightsail for scalability and security.",
      datePublished: "2024-10-13",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "TaskBuddy: Task Management Application",
      url: "https://taskbuddy.dev",
      description:
        "Created TaskBuddy, an intuitive task management app to help users organize tasks and boost productivity. Developed the front end with Next.js and TypeScript, and a secure backend in Kotlin + Spring Boot with a PostgreSQL database on AWS. Implemented custom JWT authentication and used Google Cloud Storage for image hosting.",
      datePublished: "2024-05-05",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "TaskBuddy Landing Page: Marketing Frontend",
      url: "https://taskbuddy.dev",
      description:
        "Designed and developed the marketing landing page for TaskBuddy to engage users and promote the app. Crafted custom illustrations and 3D assets in Figma, implemented a responsive layout with Next.js/TypeScript, and built sections like About Us and Learn More to showcase the app\u2019s value proposition.",
      datePublished: "2024-05-05",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "Strek-kode: Text to Barcode Generator",
      url: "https://strek-kode.no",
      description:
        "Developed and open-sourced Strek-kode, a free web app that converts text into barcodes. Built with Next.js and TypeScript for high performance, using Firebase for auth and real-time database. Designed an easy-to-use interface for generating barcodes to meet various user needs.",
      datePublished: "2024-03-10",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "Skipper\u2019n Utleie: Boat Rental Platform",
      url: "https://skipperenutleie.no",
      description:
        "Developed a comprehensive boat rental platform for Skipper\u2019n Utleie to improve business operations. Built with Next.js and TypeScript using Tailwind CSS, integrated Firebase for bookings, users, inventory, and authentication. Created a custom admin dashboard for order tracking, profit monitoring, and inventory management with full CRUD functionality.",
      datePublished: "2024-02-20",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "QR-kode.app: Custom QR Code Generator",
      url: "https://qr-kode.app",
      description:
        "Created qr-kode.app, a user-friendly platform for generating free custom QR codes with various configuration options. Built with Next.js and TypeScript for a fast frontend experience, used Supabase for backend data management, and styled with Tailwind CSS for a modern responsive UI. Provides an intuitive interface for generating QR codes for personal and business use.",
      datePublished: "2024-01-05",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
    {
      "@type": "WebApplication",
      name: "AudioVisualizer.io: Online Audio Visualization Platform",
      url: "https://audiovisualizer.io",
      description:
        "Designed, developed, and deployed AudioVisualizer.io, an online platform for uploading, sharing, and visualizing audio files. Built a RESTful API with Node.js/Express for audio compression and peak generation, used Wavesurfer.js and React for the frontend visualization, and integrated Firebase for auth and database. Enables users to upload tracks and see interactive waveforms like on SoundCloud.",
      datePublished: "2023-09-10",
      author: { "@id": "https://stianlarsen.com#person" },
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
    },
  ],
};
