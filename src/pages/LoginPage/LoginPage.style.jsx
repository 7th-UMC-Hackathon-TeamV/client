import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`

export const LoginTitleWrapper = styled.div`
  width: 100%;
  height: 43px;
  margin-top: 120px;
  padding: 8px 0;
  color: var(--gray-500)
  font-size: 18px;
  font-weight: 700;
  display: flex;
`

export const LoginTitle = styled.p`
  align-content: center;
`

export const Ellipse = styled.img`
  width: 8px;
  height: 8px;
  margin-left: 8px;
`

export const InputDiv = styled.div`
  display: flex;
  height: 48px;
  border-radius: 10px;
  border: 1px solid var(--gray-300);
  align-content: center;
`

export const Gap = styled.div`
  height: ${props => props.$gap}
`

export const Input = styled.input`
  outline: 0;
  padding: 0 15px;
  border: none;
  font-size: var(--font-body-16);
  background: none;

  flex-grow: 1;

  &::placeholder {
    color: var(--gray-400);
  }
`

export const TextNum = styled.p`
  color: ${props => props.$color || `var(--gray-400)`};
  font-size: var(--font-caption-13);
  padding: 14px 18px;
`

export const LoginButton = styled.button`
  height: 40px;
  background-color: var(--gray-500);
  border-radius: 8px;

  color: var(--gray-200);
  font-size: var(--font-title-16);
  font-weight: 700;

  &:disabled{
    background-color: var(--gray-300);
    color: var(--gray-400);
  }
`