import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   
  .back {
      background: var(--backgroundAbleButton);
      color: #ffff;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      padding: 15px;
      border-radius: 30px;
      cursor: pointer;
      margin-top: 30px;
      text-decoration: none;
      margin-right: 15px;
    }
`

export const Wrapper = styled.div`
   display: flex;
   gap: 15px;
   border: 2px solid var(--fontDisabledButton);
   border-radius: 10%;
   padding: 8px;

   @media (max-width: 485px) {
     display: grid;
   }
`