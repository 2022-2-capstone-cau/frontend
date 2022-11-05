import { UNDEF } from '@constants/shared';
import { IUserReturnType } from '@request/index';

import * as S from './styles';

type Props = {
  userValue: IUserReturnType;
};
const MyProfile = ({ userValue }: Props) => {
  const imageURL = `${process.env.API_ENDPOINT}${userValue.profile_url}`;

  return (
    <S.MyProfileWrapper className="container">
      <S.MyProfileSection>
        <S.ImageWrapper>
          <S.ProfileImage src={imageURL} />
        </S.ImageWrapper>
        <S.ProfileInformationWrapper>
          <S.Content>
            <span className="main">
              {userValue.ranking !== UNDEF ? `${userValue.ranking}` : '-'}
            </span>
            <span className="sub">인기 카테고리</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {userValue.stamp_count !== UNDEF ? `${userValue.stamp_count} 권` : '-'}
            </span>
            <span className="sub">보관중인 책</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {userValue.power !== UNDEF ? `${userValue.power} 권` : '-'}
            </span>
            <span className="sub">대출중인 책</span>
          </S.Content>
        </S.ProfileInformationWrapper>
      </S.MyProfileSection>
    </S.MyProfileWrapper>
  );
};

export default MyProfile;
