import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    height: 175vh;
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;

}

.blog-wrapper {
  background: ${({ theme }) => theme.body};
  
}

.middle-fold {
  background: ${({ theme }) => theme.body};
}

.sidebar-text {
  color: ${({ theme }) => theme.text};
}
.sidebar-header {
  color: ${({ theme }) => theme.text};
}

.full {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
`;
