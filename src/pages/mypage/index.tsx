import styled from 'styled-components';
import MyPageLayout from '@components/Layout/MyPageLayout';
import MyProfile from '@components/MyProfile';
import VisitedStore from '@components/VisitedStore';
import { getMyData } from '@request';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
  myDataResponse: any;
}

const MyPage: NextPage<Props> = ({ myDataResponse: initialMyDataResponse }: Props) => {
  return (
    <MyPageLayout nickname={initialMyDataResponse.user.name}>
      <MyProfile
        userValue={initialMyDataResponse.user}
        summaryValue={initialMyDataResponse.summary}
      />
      <MyPagePage className="container">
        <div className="store-list-title">
          <span>{initialMyDataResponse.user.name}</span>님의 대출 목록
        </div>
        <div className="store-list-layout">
          {initialMyDataResponse.rents &&
            initialMyDataResponse.rents.map((value: any) => <VisitedStore value={value} />)}
        </div>
        <div className="store-list-title">
          <span>{initialMyDataResponse.user.name}</span>님의 보관 목록
        </div>
        <div className="store-list-layout">
          {initialMyDataResponse.owns &&
            initialMyDataResponse.owns.map((value: any) => <VisitedStore value={value} />)}
        </div>
      </MyPagePage>
    </MyPageLayout>
  );
};

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const myDataResponse = await getMyData();

  return { props: { myDataResponse } };
};

const MyPagePage = styled.div`
  .store-list-title {
    ${({ theme }) => theme.fonts.subTitle1};
    margin-bottom: 1.5rem;
  }
  .store-list-layout {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px 15px;
  }
`;
