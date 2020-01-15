import { createGlobalStyle } from "styled-components";

export const LocalStyles = createGlobalStyle`
body {
    height: 175vh;
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
}
    .card {
        color: ${({ theme }) => theme.text};
    }
    .card-header {
        color: ${({ theme }) => theme.text};
    }
    .card-text {
        color: ${({ theme }) => theme.text};
    }

`;
