import { BottomBar, PageLayout } from "../../components";
import * as S from "./UpdateNewsPage.style";

const UpdateNewsPage = () => {
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
          <S.BadButton>bad:(</S.BadButton>
          <S.GoodButton>good:)</S.GoodButton>
        </S.ButtonWrapper>
        <S.ContentInput
          placeholder="본문을 입력하세요. (최대 1000자)"
          maxLength={1000}
        />
        <S.SubmitButton disabled>게시 예약하기</S.SubmitButton>
      </S.UpdateNewsPage>
    </PageLayout>
  );
};

export default UpdateNewsPage;
