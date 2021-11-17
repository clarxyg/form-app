import styled from "styled-components";

export const Container = styled.div`
    background: #f1f2f3;
    color: var(--Focus);
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Steps = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

`

export const Bar = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;

    @media (max-width: 485px) {
       gap: 45px;
       
    }
`

export const Page = styled.div`
    flex: 1;
    padding-top: 40px;
`