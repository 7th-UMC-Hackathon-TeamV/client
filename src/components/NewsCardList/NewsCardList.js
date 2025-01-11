import * as S from "./NewsCardList.style.js";
import { NewsCard } from "../../components";

const NewsCardList = () => {
  // 예시 데이터 배열
  const newsData = [
    {
      title:
        "위니, 끝내 동역사에서 4호선 갈아타기 실패… 하나 더 기다려  “극대노”",
      type: "False",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2022/03/10/15/13/clouds-7060045_1280.jpg",
    },
    {
      title: "도도, 꽁꽁 얼어붙은 한강 위로 2호선 타고 지나가는 중..",
      type: "True",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2022/03/10/15/13/clouds-7060045_1280.jpg",
    },
    {
      title: "제이, 과연 삼성 가을야구 진출 가능한지 티빙 켜고 떨리는 기다림… ",
      type: "False",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2022/03/10/15/13/clouds-7060045_1280.jpg",
    },
  ];

  return (
    <S.CardListWrapper>
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          type={news.type}
          backgroundImage={news.backgroundImage}
        />
      ))}
    </S.CardListWrapper>
  );
};

export default NewsCardList;
