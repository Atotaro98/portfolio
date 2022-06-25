import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PopUp from "./components/PopUp";
import Skills from "./components/Skills";
import Work from "./components/Work";
import config from "./data/config.json";
import dataEN from "./data/dataEN.json";
import dataES from "./data/dataES.json";
function App() {
  const [language, setLanguage] = React.useState("en");
  const [data, setData] = React.useState(dataEN);
  const [offset, setOffset] = React.useState(0);

  const [achievements, setAchievements] = React.useState({
    home: false,
    about: false,
    skills: false,
    works: false,
    contact: false,
    changeLanguage: false,
    openLinkedin: false,
    openGithub: false,
  });

  const changeLanguage = React.useCallback(() => {
    if (language === "es") {
      setLanguage("en");
      setData(dataEN);
    } else {
      setLanguage("es");
      setData(dataES);
    }
  }, [language]);

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    delay: 20, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
  });

  // You can also pass an optional settings object
  // below listed default settings

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const { Scroll } = config;
    if (offset >= Scroll.home && achievements.home === false) {
      setAchievements({
        ...achievements,
        home: true,
      });
      achievementAlert(data.App.unlock_achievement_home);
    }
    if (offset >= Scroll.about && achievements.about === false) {
      setAchievements({
        ...achievements,
        about: true,
      });
      achievementAlert(data.App.unlock_achievement_about);
    }
    if (offset >= Scroll.skills && achievements.skills === false) {
      setAchievements({
        ...achievements,
        skills: true,
      });
      achievementAlert(data.App.unlock_achievement_skills);
    }
    if (offset >= Scroll.works && achievements.works === false) {
      setAchievements({
        ...achievements,
        works: true,
      });
      achievementAlert(data.App.unlock_achievement_works);
    }
    if (offset >= Scroll.contact && achievements.contact === false) {
      setAchievements({
        ...achievements,
        contact: true,
      });
      achievementAlert(data.App.unlock_achievement_contact);
    }
  }, [offset, achievements]);
  const achievementAlert = React.useCallback(
    (title, unlocked) => {
      Toastify({
        text: `${
          unlocked ? unlocked : data.App.text_achievement_unlocked
        } -  ${title}`,
        duration: 4000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(to right, rgba(112, 157, 255, 0.8), hsla(242, 74%, 61%, 0.8))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    },
    [data.App.text_achievement_unlocked]
  );

  return (
    <>
      <PopUp />
      <Navbar
        data={data}
        achievements={achievements}
        setAchievements={setAchievements}
        changeLanguage={changeLanguage}
        achievementAlert={achievementAlert}
      />
      <Home
        data={data}
        achievements={achievements}
        setAchievements={setAchievements}
        achievementAlert={achievementAlert}
      />
      <About
        data={data}
        achievements={achievements}
        setAchievements={setAchievements}
        achievementAlert={achievementAlert}
      />
      <Skills
        data={data}
        achievements={achievements}
        setAchievements={setAchievements}
        achievementAlert={achievementAlert}
      />
      <Work
        data={data}
        achievements={achievements}
        setAchievements={setAchievements}
        achievementAlert={achievementAlert}
      />
      <Contact
        data={data}
        achievements={achievements}
        setAchievements={setAchievements}
        achievementAlert={achievementAlert}
      />
    </>
  );
}

export default App;
