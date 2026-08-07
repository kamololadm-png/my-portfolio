// Case study content for each project.
const caseStudies = {
  tesla: {
    title: "Tesla Landing Page Clone",
    brief: "The goal of this project was to recreate a professional-looking landing page inspired by Tesla's website. I wanted to improve my ability to build clean, modern layouts while paying attention to spacing, typography, and responsiveness.",
    decisions: "I chose to build the page with semantic HTML and CSS because I wanted to strengthen my front-end fundamentals before introducing JavaScript. I focused on using sections, consistent spacing, and responsive layouts so the page would look good on different screen sizes.",
    tools: "I used HTML, CSS, Visual Studio Code, Google Chrome DevTools, Git, and GitHub. This project taught me how to structure large landing pages, work with background images, and improve responsive design using Flexbox and media queries.",
    different: "I would add animations, improve accessibility by using more descriptive labels, and recreate more of Tesla's interactive features using HTML.",
    proud: "I'm proud that I recreated a polished landing page and gained confidence in building responsive layouts that closely match a real-world website."
  },
  netflix: {
    title: "Netflix Landing Page Clone",
    brief: "This is a recreation of the Netflix homepage using only HTML/CSS to practice responsive design and layout techniques.",
    decisions: "I focused on recreating the visual hierarchy by using large hero sections, cards, and clear call-to-action buttons. I paid close attention to spacing, fonts, and colours to create a familiar user experience.",
    tools: "I used HTML, CSS, Visual Studio Code, Google Chrome DevTools, Git, and GitHub. This project taught me how to structure landing pages and implement responsive design principles.",
    different: "I would add more interactive elements, improve the accessibility of the page, and enhance the user experience with subtle animations.",
    proud: "I'm proud of successfully recreating a complex layout with multiple sections and ensuring it was fully responsive across different devices."
  },
  uiscreenshot: {
    title: "UI Screenshot Recreation",
    brief: "This is a recreation of a real-world UI element using only HTML/CSS to practice design implementation skills.",
    decisions: "I approached measuring spacing, colours, and typography from a screenshot by using browser dev tools to inspect elements and adjust values until they matched the reference image.",
    tools: "I used Visual Studio Code, Google Chrome DevTools, and Figma to measure and match the design. This project taught me how to translate visual designs into code.",
    different: "I would do a better job of matching the exact colours and typography if I had access to the design system or font files.",
    proud: "I'm proud of successfully recreating a complex UI element and gaining confidence in my design implementation skills."
  },
  todo: {
    title: "To-Do List App",
    brief: "The aim of this project was to build a simple application that allows users to organize and manage daily tasks. It also gave me an opportunity to practice creating interactive web applications.",
    decisions: "I designed the interface to be simple and easy to use. I focused on clear input fields, readable task lists, and straightforward interactions so users could quickly add and manage tasks.",
    tools: "I used vanilla JS DOM manipulation and localStorage for state management. The most challenging part was handling the edge cases for task deletion and completion.",
    different: "I would refactor the code into smaller functions earlier and implement more robust error handling.",
    proud: "I'm proud of creating a functional application that provides a good user experience and helps users stay organized."
  },
  youtube: {
    title: "YouTube Clone",
    brief: "The goal was to recreate YouTube's homepage to practice building layouts with navigation bars, side menus, thumbnails, and responsive grids.",
    decisions: "I divided the page into reusable sections to keep the code organized. I used CSS Grid for the video layout because it made arranging multiple cards much easier while maintaining consistency.",
    tools: "I learned about theme persistence, DOM manipulation, and custom filter/search implementations.",
    different: "I would do a better job of matching the exact colours and typography if I had access to the design system or font files.",
    proud: "I'm proud of successfully recreating a complex UI element and gaining confidence in my design implementation skills."
  },
  zaioportfolio: {
    title: "My Zaio Portfolio (Bootstrap)",
    brief: "I needed a professional-looking portfolio to showcase my work, so I built this site using Bootstrap 5 for rapid development and responsive design.",
    decisions: "I chose a simple layout with clear navigation because I wanted visitors to find information quickly. I used a consistent color palette and responsive design so the site would work well on both desktop and mobile devices.",
    tools: "I used Bootstrap 5 for the grid system and components, along with custom CSS for branding. I learned how to customize Bootstrap themes and how to structure a portfolio site effectively.",
    different: "I would focus more on accessibility and semantic HTML structure.",
    proud: "I am proud of the responsive design and the clean, modern look of the portfolio."
  },
  twitter: {
    title: "Twitter Clone",
    brief: "The objective was to recreate Twitter's interface to improve my understanding of social media layouts and responsive web design.",
    decisions: "I focused on recreating the navigation sidebar, timeline, and profile sections while keeping the layout responsive. I organized my CSS carefully so each section could be styled independently and maintained easily.",
    tools: "I used vanilla JS, localStorage, and CSS custom properties for theming. I learned about state management and the importance of a well-structured CSS architecture.",
    different: "I would implement more comprehensive testing strategies and consider using a frontend framework for better state management.",
    proud: "I am proud of the responsive design and the functionality of the recreated Twitter interface."
  }
};

const overlay = document.getElementById("caseStudyOverlay");
const titleEl = document.getElementById("caseStudyTitle");
const bodyEl = document.getElementById("caseStudyBody");
const closeBtn = document.getElementById("caseStudyClose");

function openCaseStudy(key) {
  const study = caseStudies[key];
  if (!study) return;

  titleEl.textContent = study.title;
  bodyEl.innerHTML = `
    <h4>The Brief</h4>
    <p>${study.brief}</p>
    <h4>Key Decisions</h4>
    <p>${study.decisions}</p>
    <h4>Tools & What I Learned</h4>
    <p>${study.tools}</p>
    <h4>What I'd Do Differently</h4>
    <p>${study.different}</p>
    <h4>What I'm Proud Of</h4>
    <p>${study.proud}</p>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden"; // prevent background scroll
}

function closeCaseStudy() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".case-study-btn").forEach((btn) => {
  btn.addEventListener("click", () => openCaseStudy(btn.dataset.project));
});

closeBtn.addEventListener("click", closeCaseStudy);

// Close when clicking the dark overlay outside the modal box
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeCaseStudy();
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) {
    closeCaseStudy();
  }
});