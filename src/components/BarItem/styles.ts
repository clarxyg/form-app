import styled from "styled-components";


export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`

export const Info = styled.div`
   flex: 1;
`

export const Title = styled.div`
   font-weight: bold;
   text-align: right;
   font-size: 1rem;
   color: var(--Focus);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`


export const Dot = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border: 3px solid var(--backgroundAbleButton);
  border-radius: 50%;
  background: ${props => props.active ? 'var(--backgroundAbleButton)' : '#f1f2f3'};
  `