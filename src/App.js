import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import dataEN from "./data/dataEN.json";
import dataES from "./data/dataES.json";
function App() {
  const [language, setLanguage] = React.useState("en");
  const [data, setData] = React.useState(dataEN);

  React.useEffect(() => {
    if (language === "es") {
      setData(dataES);
    } else {
      setData(dataEN);
    }
  }, [language]);

  const changeLanguage = React.useCallback(() => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
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

  Toastify({
    text: `Logro Desbloqueado 🎉  ¡Gracias por tu ayuda!`,
    duration: -1,
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
  });

  return (
    <>
      <Navbar data={data} changeLanguage={changeLanguage} />
      <Home data={data} />
      <About data={data} />
      <Skills data={data} />
      <Work data={data} />
      <Contact data={data} />
    </>
  );
}

export default App;
