import { useState } from "react";
import { BottomBar, PageLayout } from "../../components";
import * as S from "./UpdateNewsPage.style";

const UpdateNewsPage = () => {
  const [selected, setSelected] = useState(null);

  const handleButtonClick = (type) => {
    setSelected(type);
  };

  return (
    <PageLayout footer={<BottomBar />}>
      <S.UpdateNewsPage>
        <S.Badge>속보!</S.Badge>
        <S.TitleInput
          placeholder="제목을 입력하세요. (20자 이내)"
          maxLength={20}
        />
        <S.ImageUploadArea />
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
