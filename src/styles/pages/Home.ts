import styled from 'styled-components'

export const Container = styled.body`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: start;
  flex-direction: column;
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
      font-size: 30px;
      margin-bottom: 3rem;
    }

    p {
      line-height: 24px;

      & + p {
        margin-top: 1.5rem;
      }
    }
  }
`
