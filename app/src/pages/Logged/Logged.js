import styled from 'styled-components';
import { SCREEN } from '../../styles/theme';


const LoggedWrapper = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.color.gray};
  width: 90%;
  margin: 4vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${SCREEN.DESKTOP} {
    width: 80%;
    align-items: flex-start;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 3vh;
    ${SCREEN.DESKTOP} {
      align-items: flex-start;
      margin-top: inherit;
    }

    label {
      font-size: 4vh;
      cursor: default;
      ${SCREEN.DESKTOP} {
        font-size: 5vh;
        margin-top: 3vh;
      }
    }
  
    input {
      margin: 5vh 0;
      width: 100%;
      border: ${({ theme }) => theme.color.lightGray} solid .1vh;
      color: ${({ theme }) => theme.color.gray};
      min-height: 4vh;
      padding: 2vh;
  
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.color.lightGray};
        font-family: sans-serif;
        font-size: 2.5vh;
      }
      :-moz-placeholder { /* Upto Firefox 18, Deprecated in Firefox 19  */
        color: ${({ theme }) => theme.color.lightGray};
        font-family: sans-serif;
        font-size: 2.5vh;
      }
      ::-moz-placeholder {  /* Firefox 19+ */
        color: ${({ theme }) => theme.color.lightGray};
        font-family: sans-serif; 
        font-size: 2.5vh; 
      }
      :-ms-input-placeholder {  
        color: ${({ theme }) => theme.color.lightGray};
        font-family: sans-serif;
        font-size: 2.5vh; 
      }
    } 
  }

  button {
    border: ${({ theme }) => theme.color.seafoam} solid .3vh;
    background: ${({ theme }) => theme.color.seafoam};
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    padding: 1.5vh;
    margin-top: 1.5vh;

    &:hover {
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.gray};
    }

    &:active {
      position: relative;
      top: .3vh;
    }
  }

  h3 {
    font-size: 4vh;
    ${SCREEN.DESKTOP} {
      font-size: 5vh;
    }
    margin: 8vh 0 5vh;
  }

  ul {
    min-width: 100%;
    ${SCREEN.TABLET} {
      text-align: center;
    }
  }

  li {
    margin-bottom: 2vh;
    font-size: 2.3vh;
    color: ${({ theme }) => theme.color.mediumGray};
    border-top: ${({ theme }) => theme.color.lightSeafoam} 1px solid;
    padding-top: 1vh;
  }

  div {
    color: ${({ theme }) => theme.color.mediumGray};
  }
`;

export default LoggedWrapper;
