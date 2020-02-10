import React from 'react';

import './App.css';

import PagePreview from './components/page-preview/PagePreview';
import Menu from './components/menu/Menu';
import DWT from './components/twain/WebTwain';

const dark = {
  palette: {
      themePrimary: "#0078d4",
      themeLighterAlt: "#eff6fc",
      themeLighter: "#deecf9",
      themeLight: "#c7e0f4",
      themeTertiary: "#71afe5",
      themeSecondary: "#2b88d8",
      themeDarkAlt: "#106ebe",
      themeDark: "#005a9e",
      themeDarker: "#004578",
      neutralLighterAlt: "#0b0b0b",
      neutralLighter: "#151515",
      neutralLight: "#252525",
      neutralQuaternaryAlt: "#2f2f2f",
      neutralQuaternary: "#373737",
      neutralTertiaryAlt: "#595959",
      neutralTertiary: "#fcf7f7",
      neutralSecondary: "#fcf8f8",
      neutralPrimaryAlt: "#fdf9f9",
      neutralPrimary: "#f9f2f2",
      neutralDark: "#fefcfc",
      black: "#fefdfd",
      white: "#282c34"
  }
};

const light = {
  palette: {
      themePrimary: "#0078d4",
      themeLighterAlt: "#eff6fc",
      themeLighter: "#deecf9",
      themeLight: "#c7e0f4",
      themeTertiary: "#71afe5",
      themeSecondary: "#2b88d8",
      themeDarkAlt: "#106ebe",
      themeDark: "#005a9e",
      themeDarker: "#004578",
      neutralLighterAlt: "#f8f8f8",
      neutralLighter: "#f4f4f4",
      neutralLight: "#eaeaea",
      neutralQuaternaryAlt: "#dadada",
      neutralQuaternary: "#d0d0d0",
      neutralTertiaryAlt: "#c8c8c8",
      neutralTertiary: "#c2c2c2",
      neutralSecondary: "#858585",
      neutralPrimaryAlt: "#4b4b4b",
      neutralPrimary: "#333333",
      neutralDark: "#272727",
      black: "#1d1d1d",
      white: "#ffffff"
  }
};

const App = () => {
  return (
    <div className="App">
      <Menu tittle='Digitalización' theme={dark}/>
      <div className="MainContainer">
        <div className="ContainerBorderedRight">
          <PagePreview/>
        </div>
        <div className="">
          <DWT/>
        </div>
      </div>
    </div>
  );
}

export default App;
