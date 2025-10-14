export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]

    // Portfolio context for generating responses
    const portfolioInfo = {
      about:
        "Santiago Alvarado is a Computer Science student at Sacramento State University with experience at Symbotic and Disney. He's passionate about building accessible, user-focused software.",
      projects: {
        roomies:
          "A roommate matching platform for Sacramento State students built with Next.js, PostgreSQL, and TypeScript. Features a compatibility algorithm and integrated blog.",
        aiResume:
          "An automated resume screening tool using Python, spaCy, and BERT that reduces screening time by 70%.",
        deepDrive:
          "Autonomous vehicle lane detection system using Python, OpenCV, and TensorFlow for real-time computer vision.",
        toadsJourney: "An educational platformer game built with Unity and C# featuring physics-based puzzles.",
      },
      skills:
        "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, PostgreSQL, Python. AI/ML: PyTorch, spaCy, BERT, TensorFlow. Game Dev: Unity, C#.",
      experience:
        "Worked at Symbotic on warehouse automation, Disney on user experience, World Relief on humanitarian tech, and currently studying at Sacramento State.",
      philosophy:
        "Focuses on accessibility-first design (WCAG AA compliance), performance optimization, user-focused solutions, and clean maintainable code.",
    }

    // Generate contextual response based on the question
    const question = lastMessage.content.toLowerCase()
    let response = ""

    if (
      question.includes("project") ||
      question.includes("roomies") ||
      question.includes("ai resume") ||
      question.includes("deepdrive") ||
      question.includes("toad")
    ) {
      if (question.includes("roomies")) {
        response =
          "Roomies is one of Santiago's key projects - a roommate matching platform for Sacramento State students. It was built with Next.js, PostgreSQL, and TypeScript, featuring a sophisticated compatibility algorithm that goes beyond just logistics to help students find truly compatible roommates. The platform includes user profiles, an integrated blog, and focuses on creating meaningful connections between students."
      } else if (question.includes("ai") || question.includes("resume") || question.includes("screen")) {
        response =
          "The AI Resume Screener is a powerful tool Santiago built using Python, spaCy, BERT, and scikit-learn. It automates the candidate screening process using NLP-based ranking and skill extraction, reducing screening time by an impressive 70%. This project showcases Santiago's expertise in machine learning and practical problem-solving for real-world business needs."
      } else if (question.includes("deepdrive") || question.includes("autonomous") || question.includes("lane")) {
        response =
          "DeepDrive is Santiago's autonomous vehicle project focused on lane detection. Built with Python, OpenCV, and TensorFlow, it performs real-time lane detection using computer vision techniques. This project demonstrates Santiago's understanding of AI/ML applications in self-driving car technology and real-time systems."
      } else if (question.includes("toad") || question.includes("game") || question.includes("unity")) {
        response =
          "Toad's Journey is an educational platformer game Santiago created using Unity and C#. It features physics-based puzzles designed to make learning fun and engaging. This project shows Santiago's versatility in game development and his passion for creating educational experiences."
      } else {
        response = `Santiago has built several impressive projects: Roomies (roommate matching platform), AI Resume Screener (automated candidate screening), DeepDrive (autonomous vehicle lane detection), and Toad's Journey (educational game). Each project demonstrates different aspects of his skills in web development, AI/ML, and game development. Which project would you like to know more about?`
      }
    } else if (
      question.includes("experience") ||
      question.includes("work") ||
      question.includes("job") ||
      question.includes("symbotic") ||
      question.includes("disney")
    ) {
      response =
        "Santiago has valuable industry experience from multiple companies. At Symbotic, he worked on warehouse automation systems and real-time coordination. At Disney, he focused on user experience and large-scale systems. He also contributed to World Relief, working on humanitarian tech and accessible software. Currently, he's studying Computer Science at Sacramento State while building practical projects."
    } else if (
      question.includes("skill") ||
      question.includes("technology") ||
      question.includes("tech stack") ||
      question.includes("know")
    ) {
      response =
        "Santiago has a diverse tech stack. For frontend: React, Next.js, TypeScript, and Tailwind CSS. Backend: Node.js, PostgreSQL, and Python. AI/ML: PyTorch, spaCy, BERT, scikit-learn, and TensorFlow. Game Development: Unity and C#. He focuses on accessibility, performance, and user experience in all his work."
    } else if (
      question.includes("tailwind") ||
      question.includes("css") ||
      question.includes("style") ||
      question.includes("design")
    ) {
      response =
        "Santiago chose Tailwind CSS for this portfolio because it enables rapid development with utility-first classes, ensures consistent design through a design system, and provides excellent performance with automatic purging of unused styles. Tailwind also makes responsive design straightforward and maintains great accessibility when used properly. The trade-off is a steeper learning curve initially, but the productivity gains are worth it."
    } else if (question.includes("accessibility") || question.includes("a11y") || question.includes("wcag")) {
      response =
        "Accessibility is a core principle in Santiago's work. He ensures WCAG AA compliance in all projects, uses semantic HTML, implements proper ARIA labels, maintains sufficient color contrast, and supports keyboard navigation. This portfolio itself demonstrates these principles with skip links, focus management, and screen reader support. Santiago believes accessible software is better software for everyone."
    } else if (
      question.includes("next") ||
      question.includes("future") ||
      question.includes("plan") ||
      question.includes("goal")
    ) {
      response =
        "Santiago is focused on continuing to build impactful projects that solve real problems. He's particularly interested in advancing his AI/ML skills, exploring more complex systems design challenges, and contributing to open-source projects. He's also looking for opportunities to work on products that prioritize accessibility and user experience."
    } else if (
      question.includes("contact") ||
      question.includes("reach") ||
      question.includes("email") ||
      question.includes("hire")
    ) {
      response =
        "You can reach Santiago through the contact information in his resume section, or connect with him on GitHub and LinkedIn (links in the header). He's open to discussing opportunities, collaborations, or just chatting about tech!"
    } else if (
      question.includes("portfolio") ||
      question.includes("website") ||
      question.includes("built") ||
      question.includes("trade")
    ) {
      response =
        "This portfolio was built with Next.js 15, React, TypeScript, and Tailwind CSS. Santiago chose these technologies for their excellent developer experience, performance, and modern features like server components. The trade-offs include a larger initial bundle size compared to vanilla HTML/CSS, but the benefits of type safety, component reusability, and maintainability outweigh this. The site is fully responsive, accessible, and optimized for performance."
    } else {
      response =
        "I can help you learn about Santiago's projects (Roomies, AI Resume Screener, DeepDrive, Toad's Journey), his technical skills and experience, his design philosophy, or answer questions about this portfolio. What would you like to know?"
    }

    return new Response(JSON.stringify({ message: response }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
