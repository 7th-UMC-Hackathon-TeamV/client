import { useState } from "react";
import { BottomBar, PageLayout } from "../../components";
import * as S from "./UpdateNewsPage.style";

const UpdateNewsPage = () => {
  const [selected, setSelected] = useState(null);
  const [isHotNews, setIsHotNews] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null); // 업로드된 이미지 상태 관리

  const handleButtonClick = (type) => {
    setSelected(type);
  };

  const toggleHotNews = () => {
    setIsHotNews((prev) => !prev);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result); // 업로드된 이미지를 상태로 저장
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <PageLayout footer={<BottomBar />}>
      <S.UpdateNewsPage>
        <S.HotNewsWrapper onClick={toggleHotNews}>
          <img
            src={
              isHotNews
                ? "/svgs/icon-active-check-box.svg"
                : "/svgs/icon-inactive-check-box.svg"
            }
            alt="check icon"
          />
          <S.Badge>속보 여부</S.Badge>
        </S.HotNewsWrapper>
        <S.TitleInput
          placeholder="제목을 입력하세요. (20자 이내)"
          maxLength={20}
        />
        <S.ImageUploadArea>
          {uploadedImage ? (
            <S.ImagePreview src={uploadedImage} alt="Uploaded Preview" />
          ) : (
            <S.UploadLabel>
              이미지 업로드
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </S.UploadLabel>
          )}
        </S.ImageUploadArea>
        <S.ButtonSelector>
          <S.ButtonDescription>
            *뉴스의 분위기를 체크해주세요.
          </S.ButtonDescription>
          <S.ButtonWrapper>
            <S.BadButton
              isInactive={selected !== null && selected !== "bad"}
              isSelected={selected === "bad"}
              onClick={() => handleButtonClick("bad")}
            >
              bad:(
            </S.BadButton>
            <S.GoodButton
              isInactive={selected !== null && selected !== "good"}
              isSelected={selected === "good"}
              onClick={() => handleButtonClick("good")}
            >
              good:)
            </S.GoodButton>
          </S.ButtonWrapper>
        </S.ButtonSelector>
        <S.ContentInput
          placeholder="본문을 입력하세요. (최대 1000자)"
          maxLength={1000}
        />
        <S.SubmitButton isActive={!!selected}>게시 예약하기</S.SubmitButton>
      </S.UpdateNewsPage>
    </PageLayout>
  );
};

export default UpdateNewsPage;
