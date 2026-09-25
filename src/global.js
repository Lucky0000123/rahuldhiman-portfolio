import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --navy: ${({ theme }) => theme.text};
    --blue: #0E6BA8;
    --cyan: #0FB5C9;
    --amber: #F5A524;
    --green: #16A34A;
    --ink-soft: ${({ theme }) => theme.secondaryText};
    --surface: #ffffff;
    --line: rgba(14, 107, 168, 0.14);
    --brand-gradient: linear-gradient(120deg, #0E6BA8 0%, #0FB5C9 55%, #F5A524 100%);
    --title-gradient: linear-gradient(100deg, #001C55 0%, #0E6BA8 60%, #0FB5C9 100%);
    --card-shadow: 0 1px 2px rgba(0, 28, 85, 0.06), 0 12px 32px -14px rgba(0, 28, 85, 0.22);
    --card-shadow-hover: 0 2px 4px rgba(0, 28, 85, 0.08), 0 22px 44px -16px rgba(0, 28, 85, 0.32);
    --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background-color: ${({ theme }) => theme.body};
    background-image:
      radial-gradient(900px 520px at -8% -6%, rgba(15, 181, 201, 0.16), transparent 62%),
      radial-gradient(760px 480px at 108% 4%, rgba(245, 165, 36, 0.13), transparent 60%),
      radial-gradient(1000px 700px at 50% 120%, rgba(14, 107, 168, 0.10), transparent 60%);
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  #root {
    width: 100%;
  }

  ::selection {
    background: rgba(15, 181, 201, 0.28);
    color: ${({ theme }) => theme.text};
  }

  a:focus-visible,
  button:focus-visible,
  [role="button"]:focus-visible,
  label:focus-visible {
    outline: 3px solid var(--cyan);
    outline-offset: 3px;
    border-radius: 8px;
  }

  .gradient-title {
    background: var(--title-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: "Google Sans Medium";
    font-size: 13px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--blue);
    margin: 0 0 10px;
  }

  .section-eyebrow::before {
    content: "";
    width: 28px;
    height: 3px;
    border-radius: 3px;
    background: var(--brand-gradient);
  }

  .accent-bar {
    display: block;
    width: 72px;
    height: 4px;
    border-radius: 4px;
    background: var(--brand-gradient);
    margin: 14px auto 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
