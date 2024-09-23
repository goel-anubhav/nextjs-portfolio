import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: (
      <a
        href="https://www.skillbarter.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        Skill Barter
      </a>
    ),
    description:
      "SkillBarter is a revolutionary platform designed to allow users to exchange skills with one another. Whether you're a programmer looking to learn graphic design or a chef wanting to swap expertise with a yoga instructor, SkillBarter creates a community-driven learning environment where skills are traded instead of money.",
    tools: [
      "ReactJs",
      "TypeScript",
      "Django",
      "Django Rest Framework",
      "DbSqlite3",
      "Semantic UI",
      "Bootstrap",
      "Ubuntu",
      "Apache2",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: (
      <a
        href="https://www.thecaringhands.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Caring Hands
      </a>
    ),
    description:
      "It is an Ecommerce platform where you can't only purchase but also sell and donate to the NGO. In this platform the NGO can also claim a product if the like or needy of that product.",
    tools: [
      "ReactJs",
      "Tailwind CSS",
      "Django",
      "Django Rest Framework",
      "TypeScript",
      "DbSqlite3",
      "Ubuntu",
      "Apache2",
      "CertBot",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  // {
  //     id: 3,
  //     name: 'AI Powered Real Estate',
  //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
  //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
  //     code: '',
  //     role: 'Full Stack Developer',
  //     demo: '',
  //     image: realEstate,
  // },
  // {
  //     id: 4,
  //     name: 'Newsroom Management',
  //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
  //     code: '',
  //     demo: '',
  //     image: ayla,
  //     role: 'Full Stack Developer',
  // }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
