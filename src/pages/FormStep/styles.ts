import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

 .form {
  width: 50%;
  position: relative;
  height: 50px;
  overflow: hidden;
}
  .form input {
    width: 100%;
    height: 100%;
    color: #000;
    font-weight: bold;
    padding-top: 10px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
  }
  .form label {
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100px;
    pointer-events: none;
    border-bottom: 2px solid var(--Focus);
    
    &:invalid {
      border-bottom: 2px solid var(--InvalidFocus);
    }
  }

  .form label::after {
    content: "";
    left: 0px;
    bottom: -1px;
    position: absolute;
    height: 100%;
    width: 100%;
    transition: transform all 0.3s ease;
  }

  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.3s ease;
    color: var(--Focus);
    filter: opacity(70%);
  }

  .form input:focus + .label-name .content-name,
  .form input:valid + .label-name .content-name  {
    transform: translateY(-150%);
    font-size: 14px;
  }

  button {
    background: var(--backgroundAbleButton);
    color: #ffff;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 15px;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
    width: 25%;

    &:hover {
      filter: opacity(70%);
    }

    &:disabled {
      cursor: not-allowed;
      color: var(--fontDisabledButton);
    }

    @media (max-width: 375px) {
      width: unset;
    }
  }
`