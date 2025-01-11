import styled from "styled-components";

export const UpdateNewsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Badge = styled.div`
  background-color: #d3d3d3;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  width: fit-content;
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
`;

export const CharacterLimit = styled.span`
  font-size: 12px;
  color: #ccc;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;

  &:focus {
    border-bottom: 1px solid #000;
  }
`;

export const ImageUploadArea = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const BadButton = styled.button`
  background: var(--Red-500);
  color: #fff;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const GoodButton = styled.button`
  background: var(--Blue-500);
  color: #fff;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;

  &:focus {
    border: 1px solid #000;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #ccc;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
`;
