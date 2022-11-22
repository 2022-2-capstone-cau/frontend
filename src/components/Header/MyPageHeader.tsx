import Link from 'next/link';

import Setting from '@assets/setting.svg';
import { useFetchUserValue } from '@recoil/userState';

import * as S from './styles';

interface Props {
  nickname: string;
}

const MyPageHeader = ({ nickname }: Props) => {
  const { contents: userValue } = useFetchUserValue();

  return (
    <S.MyPageHeader className="container">
      <S.TitleSection>
        <span>{nickname}</span>님의 도서관
      </S.TitleSection>
      <S.SettingSection>
        <Link href="/mypage/settings" passHref>
          <Setting />
        </Link>
      </S.SettingSection>
    </S.MyPageHeader>
  );
};

export default MyPageHeader;
