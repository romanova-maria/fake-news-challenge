import { WithTestId } from "../../types";
import { styled } from "../../styles";
import { dangerStyles, primaryStyles, buttonCommons } from "./buttonStyles";
import { ButtonHTMLAttributes } from "react";

/*
 * Variants helps developers to avoid mistakes.
 * Thanks to TS, only options from this list can be used for button appearance,
 * so it is impossible to forget to add needed class.
 * */

export enum VARIANTS {
  primary = "primary",
  danger = "danger",
}

interface Button extends ButtonHTMLAttributes<HTMLButtonElement>, WithTestId {
  variant?: VARIANTS;
}

/*
 * variant - helps to be sure that buttons won't have random styles here and there.
 * testId - helps to communicate with QA. Have to be required and added to all
 * interactive components. If QA team works with data-testid only, then dev team
 * can change component markup without concerns. At the same time, if testId was changed,
 * then dev team have to inform QA team and put a comment about changes
 * to the pull request
 * */
const Button = ({
  children,
  variant = VARIANTS.primary,
  testId,
  className,
  ...props
}: Button) => {
  return (
    <button
      className={`${className} ${variant}`}
      data-testid={testId}
      {...props}
    >
      {children}
    </button>
  );
};

export default styled(Button)`
  && {
    ${buttonCommons};
    text-transform: uppercase;
    font-weight: bold;
    max-width: 20rem;

    &.${VARIANTS.primary} {
      ${primaryStyles};
    }

    &.${VARIANTS.danger} {
      ${dangerStyles};
    }
  }
`;
