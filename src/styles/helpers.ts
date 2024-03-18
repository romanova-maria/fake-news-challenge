/*
 * File includes all common style helpers for reusing them through the app
 * */
import { css } from "styled-components";
/*
 * Use the focusStyles rule set for all the interactive elements.
 * If the application requires a11y level, then all the interactive elements must have focus styles.
 * */
export const focusStyles = css`
  &:focus-visible {
    outline: none;
    box-shadow: ${(props) => `0 0 0 0.25rem ${props.theme.palette.focus}80`};
  }
`;

export const textHoverStyles = css`
  &:hover,
  &:active,
  &.active {
    color: ${(props) =>
      props.theme.colors.crazyPink}; // can be moved to the theme
  }
`;
