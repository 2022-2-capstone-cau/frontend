import { UNDEF } from '@constants/shared';

import * as S from './styles';

type Props = {
  userValue: any;
  summaryValue: any;
};
const MyProfile = ({ userValue, summaryValue }: Props) => {
  return (
    <S.MyProfileWrapper className="container">
      <S.MyProfileSection>
        <S.ImageWrapper>
          <S.ProfileImage src={userValue.profile} />
        </S.ImageWrapper>
        <S.ProfileInformationWrapper>
          <S.Content>
            <span className="main">
              {summaryValue.popularCategory.title !== UNDEF
                ? `${summaryValue.popularCategory.title}`
                : '-'}
            </span>
            <span className="sub">인기 카테고리</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {summaryValue.numberOfOwn !== UNDEF ? `${summaryValue.numberOfOwn} 권` : '-'}
            </span>
            <span className="sub">보관중인 책</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {summaryValue.numberOfRental !== UNDEF ? `${summaryValue.numberOfRental} 권` : '-'}
            </span>
            <span className="sub">대출중인 책</span>
          </S.Content>
        </S.ProfileInformationWrapper>
      </S.MyProfileSection>
    </S.MyProfileWrapper>
  );
};

export default MyProfile;
