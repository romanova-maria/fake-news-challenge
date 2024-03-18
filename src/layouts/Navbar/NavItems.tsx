import { styled } from "../../styles";
import { css } from "styled-components";
import { textHoverStyles } from "../../styles/helpers";
import { NavLink, NavLinkProps } from "react-router-dom";
import { HTMLAttributes, SyntheticEvent, useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";

const navItemStyles = css`
  ${textHoverStyles};

  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const Link = styled(NavLink)`
  ${navItemStyles};
  &:hover {
    text-decoration: underline;
  }
`;

export const GroupedLinks = styled(
  ({
    header,
    links,
    ...props
  }: {
    header: string;
    links: (NavLinkProps & { title: string })[];
  } & HTMLAttributes<HTMLElement>) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsOpen(false));
    const openSubmenu = (e: SyntheticEvent<HTMLElement>) => {
      e.preventDefault();
      setIsOpen((current) => !current);
    };

    return (
      <div {...props} ref={ref}>
        <div onClick={(e) => openSubmenu(e)}>{header}</div>
        <div className={`submenu ${isOpen ? "open" : "close"}`}>
          {links.map(({ to, title }) => (
            <Link to={to} key={title} onClick={() => setIsOpen(false)}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    );
  },
)`
  ${navItemStyles};
  cursor: pointer;

  .submenu {
    backdrop-filter: blur(10px);
    box-shadow: 0 3px 5px ${(props) => props.theme.palette.primary};
    position: absolute;
    top: ${(props) => props.theme.components.header.height};

    display: flex;
    flex-direction: column;

    &.close {
      transition: 300ms;
      width: 0;
      left: 50%;
      ${Link} {
        visibility: hidden;
      }
    }

    &.open {
      transition: 300ms;
      width: 100vw;
      left: 0;

      ${Link} {
        visibility: visible;
      }
    }

    ${Link} {
      color: ${(props) => props.theme.palette.primary};
      ${textHoverStyles};

      --link-height: 3rem;
      display: block;
      text-align: center;
      height: var(--link-height);
      line-height: var(--link-height);
    }
  }
`;
