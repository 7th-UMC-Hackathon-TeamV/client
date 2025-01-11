import * as S from "./NewsCardList.style.jsx";
import { NewsCard } from "../../components";

const NewsCardList = () => {
  const newsData = [
    {
      title:
        "위니, 끝내 동역사에서 4호선 갈아타기 실패… 하나 더 기다려  “극대노”",
      type: "False",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2020/07/28/14/25/south-korea-subway-5445197_1280.jpg",
    },
    {
      title: "도도, 꽁꽁 얼어붙은 한강 위로 2호선 타고 지나가는 중..",
      type: "True",
      backgroundImage:
        "https://media.istockphoto.com/id/2141300950/ko/%EC%82%AC%EC%A7%84/seoul-and-the-han-river-in-south-korea.jpg?s=1024x1024&w=is&k=20&c=eETjbjG0IZnEiadmYdFZV3CAxRP_tLc_MIQ4OXNGyeU=",
    },
    {
      title: "제이, 과연 삼성 가을야구 진출 가능한지 티빙 켜고 떨리는 기다림… ",
      type: "False",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2017/05/22/07/24/baseball-2333353_1280.jpg",
    },
  ];

  return (
    <S.CardListWrapper>
      {newsData.length > 0 ? (
        newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            type={news.type}
            backgroundImage={news.backgroundImage}
          />
        ))
      ) : (
        <S.EmptyMessage>당신의 뉴스를 들려주세요</S.EmptyMessage>
      )}
    </S.CardListWrapper>
  );
};

export default NewsCardList;
