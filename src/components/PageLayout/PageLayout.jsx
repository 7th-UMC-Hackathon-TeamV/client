import * as S from "./PageLayout.style";

const PageLayout = ({ header, footer, className, children }) => {
  return (
    <S.Layout className={className}>
      {header}
      <S.Content>{children}</S.Content>
      {footer && <S.Footer>{footer}</S.Footer>}
    </S.Layout>
  );
};

export default PageLayout;
