import styled from 'styled-components'

export const Container = styled.body`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: start;
  flex-direction: column;

  footer {
    display: flex;
    justify-content: space-between;

    padding: 4rem;
    font-size: 0.875rem;

    div {
      p {
        color: ${({ theme }) => theme.colors.text.highlight};

        & + p {
          color: ${({ theme }) => theme.colors.text.light};
          font-weight: 600;
        }
      }
    }

    button {
      font-weight: 600;

      background: none;
      color: ${({ theme }) => theme.colors.text.light};

      border: none;

      transition: 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`

export const Landing = styled.section`
  flex: 1;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const About = styled.section`
  flex: 1;
  padding: 0 10vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.dark};

  div {
    max-width: 527px;

    h2 {
      font-weight: 400;
      margin-bottom: 3rem;
    }

    p {
      line-height: 1.5rem;

      & + p {
        margin-top: 1.5rem;
      }
    }
  }
`

export const Portfolio = styled.section`
  flex: 1;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    max-width: 700px;
    padding: 3rem 4rem;

    text-align: center;

    border: 1px solid #ffffff;
    border-radius: 1px;

    h2 {
      font-size: 1.875rem;
    }

    p {
      line-height: 1.5rem;
      margin: 2.5rem 0;
    }

    button {
      padding: 1rem 3rem;

      background: none;
      color: ${({ theme }) => theme.colors.text.light};

      border: 1px solid #ffffff;
      border-radius: 1px;

      transition: 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
export const Connected = styled.section`
  background: ${({ theme }) => theme.colors.background.blue};
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;

      margin: 1.5rem 0;
      font-size: 1.125rem;

      a {
        color: ${({ theme }) => theme.colors.text.light};
        text-decoration: none;
        transition: 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }

      svg {
        font-size: 1.125rem;
        margin-right: 1.5rem;
      }
    }
  }

  div {
    max-width: 400px;
    width: 40vw;
    height: 60vh;

    > h2 {
      font-weight: normal;
      margin-bottom: 3rem;
    }

    /* &.contacts {
      background-color: red;
    }

    &.last-commits {
      background-color: yellow;
    } */
  }
`
