import { useRouter } from 'next/router';
import styled from 'styled-components';
import HorizontalLogo from '@assets/horizontal-logo.svg';
import InfoCard from '@components/InfoCard';
import Layout from '@components/Layout';
import RankingCard from '@components/Shared/RankingCard';
import { getHomeData } from '@request';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  homeDataResponse?: any;
}

const Home: NextPage<Props> = ({ homeDataResponse: initialHomeDataResponse }: Props) => {
  const { push } = useRouter();

  return <div>home</div>;

  return (
    <Layout title="홈" noHeader>
      <HomePage>
        <MyInfoSection>
          <LogoArea>
            <HorizontalLogo />
          </LogoArea>
          <CatchPhraseArea>{'오늘은\n책 빌리는 날!'}</CatchPhraseArea>
          <InfoCardArea>
            <InfoCard
              type="visited"
              value={initialHomeDataResponse.rent.fastestRemainingReturnDay}
              onClick={() => push('/mypage')}
            />
            <InfoCard
              type="ranking"
              value={initialHomeDataResponse.rent.numberOfRental}
              onClick={() => push('/ranking')}
            />
          </InfoCardArea>
        </MyInfoSection>
        <RankingSection>
          <RankingSectionTitle>
            내가 읽지 않은 {initialHomeDataResponse.recommend.category.title} 분야 책 엿보기 👀
          </RankingSectionTitle>
          {/*<RankingCardArea>*/}
          {/*  {initialHomeDataResponse.recommend.list.map((item: any) => (*/}
          {/*    <RankingCard key={item.id} value={item.title} />*/}
          {/*  ))}*/}
          {/*</RankingCardArea>*/}
        </RankingSection>
      </HomePage>
    </Layout>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const homeDataResponse = await getHomeData();
//
//   return { props: { homeDataResponse } };
// };

const HomePage = styled.main`
  height: 100%;
  background-color: #f8f8fc;
  letter-spacing: -0.02em;
`;

const MyInfoSection = styled.section`
  padding: 0 20px 20px 20px;
  background-color: #fff;
`;

const LogoArea = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;

const CatchPhraseArea = styled.h1`
  line-height: 44.8px;
  font-size: 32px;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const InfoCardArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RankingSection = styled(MyInfoSection)`
  padding-top: 20px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 32px;
  color: #54545a;
`;

const RankingSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.subTitle1};
  line-height: 32px;
  color: #000;
`;

const RankingCardArea = styled.div`
  margin-top: 20px;
`;
