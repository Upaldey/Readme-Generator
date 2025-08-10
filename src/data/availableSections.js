const ALL_SECTIONS = [
  {
    id: "title-and-description",
    title: "Title and Description",
    content:
      "# My Awesome Project\n\nA brief description of what this project does and who it's for.",
  },
  {
    id: "acknowledgements",
    title: "Acknowledgements",
    content:
      "## Acknowledgements\n\n- [Awesome Readme Templates](https://awesome-readme.com/)\n- [Awesome README](https://github.com/matiassingers/awesome-readme)\n- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)",
  },
  {
    id: "api-reference",
    title: "API Reference",
    content:
      "## API Reference\n\n#### Get all items\n\n```http\n  GET /api/items\n```\n\n| Parameter | Type     | Description                |\n| :-------- | :------- | :------------------------- |\n| `api_key` | `string` | **Required**. Your API key |\n\n#### Get item\n\n```http\n  GET /api/items/:id\n```\n\n| Parameter | Type     | Description                       |\n| :-------- | :------- | :-------------------------------- |\n| `id`      | `string` | **Required**. ID of item to fetch |\n",
  },
  {
    id: "appendix",
    title: "Appendix",
    content: "## Appendix\n\nAny additional information goes here.",
  },
  {
    id: "authors",
    title: "Authors",
    content:
      "## Authors\n\n- [@your-github-username](https://www.github.com/your-github-username)",
  },
  {
    id: "badges",
    title: "Badges",
    content:
      "## Badges\n\nAdd badges from somewhere like: [shields.io](https://shields.io/)",
  },
  {
    id: "color-reference",
    title: "Color Reference",
    content:
      "## Color Reference\n\n| Color         | Hex                                                                |\n|---------------|--------------------------------------------------------------------|\n| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f`   |",
  },
  {
    id: "contributing",
    title: "Contributing",
    content:
      "## Contributing\n\nContributions are always welcome! See `contributing.md` for ways to get started.",
  },
  {
    id: "demo",
    title: "Demo",
    content:
      "## Demo\n\nInsert a demo of your project here. This could be a GIF or a link to a live demo.",
  },
  {
    id: "deployment",
    title: "Deployment",
    content:
      "## Deployment\n\nTo deploy this project run\n\n```bash\n  npm run deploy\n```",
  },
  {
    id: "documentation",
    title: "Documentation",
    content:
      "## Documentation\n\n[Link to your documentation](https://link-to-your-documentation)",
  },
  {
    id: "environment-variables",
    title: "Environment Variables",
    content:
      "## Environment Variables\n\nTo run this project, you will need to add the following environment variables to your .env file\n\n`API_KEY`\n`ANOTHER_API_KEY`",
  },
  { id: "faq", title: "FAQ", content: "## FAQ\n\n#### Question 1\n\nAnswer 1" },
  {
    id: "features",
    title: "Features",
    content: "## Features\n\n- Feature 1\n- Feature 2\n- Feature 3",
  },
  {
    id: "feedback",
    title: "Feedback",
    content:
      "## Feedback\n\nIf you have any feedback, please reach out to us at fake@email.com",
  },
  {
    id: "gif-demo",
    title: "GIF Demo",
    content:
      "## Demo GIF\n\n![Demo GIF](https://placehold.co/600x400/000000/FFFFFF?text=Your+GIF+Here)",
  },
  {
    id: "github-profile-about-me",
    title: "Github Profile - About Me",
    content: "### About Me\n\nA passionate developer from...",
  },
  {
    id: "github-profile-introduction",
    title: "Github Profile - Introduction",
    content: "# Hi, I'm Jane! 👋",
  },
  {
    id: "github-profile-links",
    title: "Github Profile - Links",
    content:
      "### Links\n\n[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)\n[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)",
  },
  {
    id: "github-profile-other",
    title: "Github Profile - Other",
    content: "### Other\n\n...",
  },
  {
    id: "github-profile-skills",
    title: "Github Profile - Skills",
    content: "### Skills\n\nJavaScript, React, Node.js...",
  },
  {
    id: "installation",
    title: "Installation",
    content:
      "## Installation\n\nInstall my-project with npm\n\n```bash\n  npm install my-project\n```",
  },
  {
    id: "lessons",
    title: "Lessons Learned",
    content:
      "## Lessons Learned\n\nWhat did you learn while building this project? What challenges did you face and how did you overcome them?",
  },
  {
    id: "license",
    title: "License",
    content: "## License\n\n[MIT](https://choosealicense.com/licenses/mit/)",
  },
  {
    id: "logo",
    title: "Logo",
    content: "![Logo](https://placehold.co/150x150/000000/FFFFFF?text=Logo)",
  },
  {
    id: "optimizations",
    title: "Optimizations",
    content:
      "## Optimizations\n\nWhat optimizations did you make in your code? E.g. refactoring, performance improvements, accessibility.",
  },
  {
    id: "related",
    title: "Related",
    content:
      "## Related\n\nHere are some related projects\n\n[Awesome README](https://github.com/matiassingers/awesome-readme)",
  },
  {
    id: "roadmap",
    title: "Roadmap",
    content:
      "## Roadmap\n\n- Additional browser support\n- Add more integrations",
  },
  {
    id: "run-locally",
    title: "Run Locally",
    content:
      "## Run Locally\n\nClone the project\n\n```bash\n  git clone https://link-to-project\n```\n\nGo to the project directory\n\n```bash\n  cd my-project\n```\n\nInstall dependencies\n\n```bash\n  npm install\n```\n\nStart the server\n\n```bash\n  npm run start\n```",
  },
  {
    id: "screenshots",
    title: "Screenshots",
    content:
      "## Screenshots\n\n![App Screenshot](https://placehold.co/600x400/000000/FFFFFF?text=App+Screenshot)",
  },
  {
    id: "socials",
    title: "Socials",
    content:
      "## Socials\n\nIf you have any questions, feel free to reach out to me on:\n\n[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/your-username/)\n[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/your-username)\n[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/your-username/)",
  },
  {
    id: "support",
    title: "Support",
    content:
      "## Support\n\nFor support, email fake@email.com or join our Slack channel.",
  },
  {
    id: "tech",
    title: "Tech Stack",
    content:
      "## Tech Stack\n\n**Client:** React, Redux, TailwindCSS\n\n**Server:** Node, Express",
  },
  {
    id: "running-tests",
    title: "Running Tests",
    content:
      "## Running Tests\n\nTo run tests, run the following command\n\n```bash\n  npm run test\n```",
  },
  {
    id: "usage-examples",
    title: "Usage/Examples",
    content:
      "## Usage/Examples\n\n```javascript\nimport Component from 'my-project';\n\nfunction App() {\n  return <Component />\n}\n```",
  },
];
export default ALL_SECTIONS;
