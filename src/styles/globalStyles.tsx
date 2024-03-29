import { createGlobalStyle } from "styled-components";
import logoTextTransparentBlack from "/src/assets/miruro-text-transparent-black.webp";
import logoTextTransparentWhite from "/src/assets/miruro-text-transparent-white.webp";
import logoTransparentBlack from "/src/assets/miruro-transparent-black.webp";
import logoTransparentWhite from "/src/assets/miruro-transparent-white.webp";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-accent: #ff3860;
    --primary-accent-bg: #ffd3e0;

    --global-primary-bg: #f5f5f5;
    --global-text: #333333;
    --global-button-bg: #ff3860;
    --global-button-hover-bg: #e81c61;
    --global-button-text: #ffffff;
    --global-card-bg: #ffffff;
    --global-card-shadow: rgba(0, 0, 0, 0.1);
    --global-input-border: rgba(0, 0, 0, 0.1);
  }

  :root.dark-mode {
    --primary-accent: #ff3860;
    --primary-accent-bg: #ffd3e0;

    --global-primary-bg: #080808;
    --global-text: #e8e8e8;
    --global-button-bg: #ff3860;
    --global-button-hover-bg: #e81c61;
    --global-button-text: #ffffff;
    --global-card-bg: #1f1f1f;
    --global-card-shadow: rgba(255, 255, 255, 0.1);
    --global-input-border: rgba(255, 255, 255, 0.1);
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0 2rem 2rem 2rem;
    max-width: 125rem;
    margin: auto;
    background-color: var(--global-primary-bg);
    color: var(--global-text);
    transition: background-color 0.3s, color 0.3s;

    @media (max-width: 1000px) {
      padding: 0 0.5rem 0.5rem 0.5rem;
    }
  }

  ::selection {
    background-color: var(--primary-accent-bg);
    color: var(--primary-accent);
  }

  /* Additional Styles */
  video::cue {
    background: rgba(255, 56, 96, 0.5);
    color: #fff;
    padding: 1rem;
    font-size: 2.5vw;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;

export default GlobalStyles;
