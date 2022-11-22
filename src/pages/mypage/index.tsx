import dayjs from 'dayjs';
import styled from 'styled-components';

import MyPageLayout from '@components/Layout/MyPageLayout';
import MyProfile from '@components/MyProfile';
import VisitedStore from '@components/VisitedStore';
import { IMyOmakase, useMyOmakaseRecoilValue, useRefetchMyOmakases } from '@recoil/myOmakaseState';
import { useFetchUserValue } from '@recoil/userState';
import { useEffect, useState } from 'react';
import { getMyData } from '@request';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
  myDataResponse: any;
}

const MyPage: NextPage<Props> = ({ myDataResponse: initialMyDataResponse }: Props) => {
  // useRefetchMyOmakases();
  //
  // const userValue = useFetchUserValue();

  // console.log(userValue);
  // const {
  //   contents: { omakases },
  // } = useMyOmakaseRecoilValue();
  //
  // const replaceDate = (date: IMyOmakase['create_date']) => {
  //   return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  // };

  const [myData, setMyData] = useState({});

  console.log(initialMyDataResponse);
  //
  // useEffect(() => {
  //   (async () => await getMyData())().then((res) => {
  //     setMyData(res);
  //     console.log(res);
  //   });
  // }, []);

  return (
    <MyPageLayout>
      <MyProfile
        userValue={initialMyDataResponse.user}
        summaryValue={initialMyDataResponse.summary}
      />
      <MyPagePage className="container">
        <div className="store-list-title">
          <span>{initialMyDataResponse.user.name}</span>님의 대출 목록
        </div>
        {/*<div className="store-list-layout">*/}
        {/*  {userValue &&*/}
        {/*      userValue.map((userValue: IMyOmakase) => (*/}
        {/*      <VisitedStore*/}
        {/*        key={omakase.id}*/}
        {/*        id={omakase.id}*/}
        {/*        image={omakase.photo_url}*/}
        {/*        name={omakase.name}*/}
        {/*        date={replaceDate(omakase.create_date)}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*</div>*/}
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
