import styled from "styled-components";

export const UpdateNewsPage = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const HotNewsWrapper = styled.div`
  display: flex;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Gray-500, #222);
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 12px;
`;

export const TitleInput = styled.input`
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
  height: 160px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #888;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ChangeImageButton = styled.label`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: #fff;
  color: #222;
  border: 1px solid #a8a8a8;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  line-height: 150%;
`;

export const ButtonDescription = styled.span`
  display: flex;
  color: var(--Gray-400, #a8a8a8);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const BadButton = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "#E22C2F" : props.isInactive ? "#f5a5a5" : "#f5a5a5"};
  color: #fff;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const GoodButton = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "#18309F" : props.isInactive ? "#a0c4e8" : "#a0c4e8"};
  color: #fff;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const ContentInput = styled.textarea`
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
  background-color: ${(props) => (props.isActive ? "#0275d8" : "#ccc")};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed")};
`;
