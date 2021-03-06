import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../modules/theme";
import { GlobalStyles } from "../modules/global";
import logoImg from "../media/logo.svg";
import Clock from "./Clock"

import Toggle from "./Toggle";

function Header(props) {
  // Toggle theme functionality from css tricks https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
  const [theme, setTheme] = useState("dark");

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "dark") {
      setTheme("light");
      // otherwise, it should be light
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="Header">
      <div className="logo-wrapper">
        <img className="logo" src={logoImg} alt="LOGO"/>
        <h1>{props.data.bar.name}</h1>
      </div>
    
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </>
      </ThemeProvider>

      <Clock  data={props.data}/>
    </div>
  );
}

export default Header;
