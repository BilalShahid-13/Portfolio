const Heading = [
  {
    title: "Bilal Shahid",
  },
];

const NavbarItems = [
  { title: "Home" },
  { link: "/" },
  { title: "projects" },
  { link: "/projects" },
  { title: "about" },
  { link: "/about" },
  { title: "contact" },
  { link: "/contact" },
];

const HeroTitle = [
  { title: "Web" },
  { title: "Developer" },
  { title: "Pakistan*" },
];

const HeroDes = [
  { p: "IN THE" },
  { bold: "DESIGNING" },
  { p: "FROM OVER FIVE YEARS I TURN" },
  { bold: "IDEAS INTO AMAZING" },
  { p: "PROJECTS THROUGH THE WORLD OF" },
  { bold: "CREATIVE" },
  { p: "AND" },
  { bold: "INTERACTIVE IDEAS & DESIGN *" },
];

const SelectedPage = [{ id: 2 }, { title: "Selected" }, { des: "Project*" }];

const Projects = [
  // react weather
  { sampleimg: "/projects/weather-react/2.png" },
  { title: "Weather Wise Web App" },
  {
    des: "The Weather Forecast App is a user-friendly tool that provides accurate and up-to-date weather information for any location. With a beautiful design and smooth animations, users can quickly check current weather conditions and a 5-day forecast simply by entering a city name or using their current location.",
  },
  // news app
  { sampleimg: "/projects/news-app/1.png" },
  { title: "News Web App" },
  {
    des: "My news app is designed to be easy to use and visually appealing. It gives accurate updates on current events and lets users quickly access a 5-day forecast by entering a location or using their current one.",
  },
  // weather app
  { sampleimg: "/projects/weather/1.png" },
  { title: "Climate Chronicles App" },
  {
    des: "In my Weather App, I offer straightforward access to current weather details. Users can swiftly find out the current temperature, along with the day's lowest and highest temperatures, humidity levels, wind speed, and the times of sunrise and sunset. It's a convenient way to stay informed about the weather at a glance.",
  },
  // text utils app
  { sampleimg: "/projects/text-utils/1.png" },
  { title: "Text Utils Web App" },
  {
    des: "In my Text Utils web app, I'm providing useful tools for manipulating text. Users can easily convert text from uppercase to lowercase, copy text, and count the number of words they've written. It's a simple yet handy tool for managing text easily.",
  },
];

const WeatherImgs = [
  "/projects/weather-react/1.png",
  "/projects/weather-react/2.png",
  "/projects/weather-react/3.png",
  "/projects/weather-react/4.png",
];

const Temp = [
  // react weather
  {
    position: "start",
    sampleimg: "/projects/weather-react/2.png",
    title: "Weather Wise Web App",
    des: "The Weather Forecast App is a user-friendly tool that provides accurate and up-to-date weather information for any location. With a beautiful design and smooth animations, users can quickly check current weather conditions and a 5-day forecast simply by entering a city name or using their current location.",
  },

  // news app
  {
    position: "end",
    sampleimg: "/projects/news-app/1.png",
    title: "News Web App",
    des: "My news app is designed to be easy to use and visually appealing. It gives accurate updates on current events and lets users quickly access a 5-day forecast by entering a location or using their current one.",
  },
  {
    imgs: [
      "/projects/weather-react/1.png",
      "/projects/weather-react/2.png",
      "/projects/weather-react/3.png",
      "/projects/weather-react/4.png",
    ],
  },
  // weather app
  {
    position: "start",
    sampleimg: "/projects/weather/1.png",
    title: "Climate Chronicles App",
    des: "In my Weather App, I offer straightforward access to current weather details. Users can swiftly find out the current temperature, along with the day's lowest and highest temperatures, humidity levels, wind speed, and the times of sunrise and sunset. It's a convenient way to stay informed about the weather at a glance.",
    imgs: [
      "/projects/weather-react/1.png",
      "/projects/weather-react/2.png",
      "/projects/weather-react/3.png",
      "/projects/weather-react/4.png",
    ],
  },

  // text utils app
  { position: "end" },
  { sampleimg: "/projects/text-utils/1.png" },
  { title: "Text Utils Web App" },
  {
    des: "In my Text Utils web app, I'm providing useful tools for manipulating text. Users can easily convert text from uppercase to lowercase, copy text, and count the number of words they've written. It's a simple yet handy tool for managing text easily.",
  },
  {
    imgs: [
      "/projects/weather-react/1.png",
      "/projects/weather-react/2.png",
      "/projects/weather-react/3.png",
      "/projects/weather-react/4.png",
    ],
  },
];

const Tmp = [
  // npm package
  {
    position: "start",
    sampleimg:
      // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8mJiYAAAAUFBQjIyMzMzPn5+fr6+utra22trZwcHCOjo4cHBwPDw8ZGRn39/fY2NiWlpZ/f39DQ0MrKysJCQmhoaHx8fG0tLRra2vg4OC8vLyVlZV+fn52dnZtB+3aAAABb0lEQVR4nO3aXU/CMBiAUdgGfjFQBEFF///P1ISwdckaViDRwjmXXd+yJ9wwYDQCAAAAAAAAAAAAAAAAAAAAAAAAgL37okxSbA+T09TJ98PkXeJk/MinIYX1OMn6oS1Mm5w/toVpk1Hl/yqcKUynUGEvhXEKT6Dw1gurULs8oDAyeU5h/4nnFVavgUl77PHC2OSAwroIRI+8UGERbnopEwo7k2/t5PHCervY/Npv+gg2dY5czi9UuDi5cNM/ebxw/RlMPitUqFChQoUKFSpUqFChQoUKFSpUqFBh9oXh8UnfCOdSWK0Cwfr1FMZ+RrmiwgiFChUqVKhQ4R8WrqtencJd3a4n/tukFf6DNvKa3cLgQnjHX2WzPqywmvQqO+/huFmvmruIfi7tP3Cy+m4K5/07qk7hrL1Qh3e8XDXr492AwtMNerbI2qDnw6wpzJ/C/CnMn8L8KczftIi4mkIAAAAAAAAAAAAAAAAAAABuxQ+a2VKQTE1ZPQAAAABJRU5ErkJggg==",
      "data:image/png;base64,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",
    des: "A JavaScript package to generate random colors and numbers Node.js , JS.",
    title: "randomizer-pro-js",
    imgs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqblwr0UgDidamWN2i8uLC7-nzPtCPinrgQ1qcVj0LmMArYboUQ-gh_bpMs6XklOvL4KE&usqp=CAU",
    ],
    link: "https://www.npmjs.com/package/randomizer-pro-js",
  },

  // blogging app

  {
    position: "start",
    sampleimg:
      "https://bilalshahid-13.github.io/Portfolio/projects/Blogging-App/1.png",
    des: "Blogic is a modern blogging platform developed with the MERN stack (MongoDB, Express.js, React, Node.js) designed to provide a seamless and engaging experience for bloggers and readers alike. The platform combines a robust backend with an intuitive frontend to deliver a comprehensive solution for managing and sharing content.",
    title: "Blogic Web App",
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/Blogging-App/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/Blogging-App/2.png",
    ],
    link: "https://bilalshahid-13.github.io/Blogging-WebApp/",
  },

  // Vision app
  {
    position: "start",
    title: "Vision Ai Web App",
    sampleimg:
      "https://bilalshahid-13.github.io/Portfolio/projects/Vision-ai/1.png",
    des: "Text-to-Image web application using React, where users input text prompts and receive corresponding images generated by an AI-powered API. Hosted on GitHub Pages for easy access. Explore the future of creative technology!",
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/Vision-ai/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/Vision-ai/2.png",
    ],
    link: "https://bilalshahid-13.github.io/Vision.ai/",
  },

  // react weather
  {
    position: "start",
    sampleimg:
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/2.png",
    title: "Weather Wise Web App",
    des: "The Weather Forecast App is a user-friendly tool that provides accurate and up-to-date weather information for any location. With a beautiful design and smooth animations, users can quickly check current weather conditions and a 5-day forecast simply by entering a city name or using their current location.",
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/2.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/3.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/4.png",
    ],
  },

  // news app

  {
    position: "end",
    sampleimg:
      "https://bilalshahid-13.github.io/Portfolio/projects/news-app/1.png",
    title: "News Web App",
    des: "My news app is designed to be easy to use and visually appealing. It gives accurate updates on current events and lets users quickly access a 5-day forecast by entering a location or using their current one.",
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/2.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/3.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/4.png",
    ],
  },

  // weather app

  {
    position: "start",
    sampleimg:
      "https://bilalshahid-13.github.io/Portfolio/projects/weather/1.png",
    title: "Climate Chronicles App",
    des: "In my Weather App, I offer straightforward access to current weather details. Users can swiftly find out the current temperature, along with the day's lowest and highest temperatures, humidity levels, wind speed, and the times of sunrise and sunset. It's a convenient way to stay informed about the weather at a glance.",
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/2.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/3.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/4.png",
    ],
  },

  // text utils app

  {
    position: "end",
    sampleimg:
      "https://bilalshahid-13.github.io/Portfolio/projects/text-utils/1.png",
    title: "Text Utils Web App",
    des: "In my Text Utils web app, I'm providing useful tools for manipulating text. Users can easily convert text from uppercase to lowercase, copy text, and count the number of words they've written. It's a simple yet handy tool for managing text easily.",
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/2.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/3.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/4.png",
    ],
  },
];

const ProjectImages = [
  {
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/Blogging-App/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/Blogging-App/2.png",
    ],
  },
  {
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/Vision-ai/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/Vision-ai/2.png",
    ],
  },
  {
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/2.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/3.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather-react/4.png",
    ],
  },
  {
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/news-app/1.png",
    ],
  },
  {
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/weather/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather/2.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/weather/3.png",
    ],
  },
  {
    imgs: [
      "https://bilalshahid-13.github.io/Portfolio/projects/text-utils/1.png",
      "https://bilalshahid-13.github.io/Portfolio/projects/text-utils/2.png",
    ],
  },
];

const ContactData = [
  { title: "IF YOU HAVE A GENERAL OR PROJECT ENQUIRY, PLEASE DROP ME AN" },
  { bold: "Email " },
  { title: "or" },
  { bold: "contact" },
  { title: "*" },
];

const Form = [
  { title: "Name", type: "text" },
  { title: "Email", type: "email" },
  { title: "message", type: "text" },
];

const Data = {
  Heading,
  NavbarItems,
  HeroTitle,
  HeroDes,
  SelectedPage,
  Projects,
  WeatherImgs,
  Tmp,
  Temp,
  ProjectImages,
  ContactData,
  Form,
};

export default Data;
