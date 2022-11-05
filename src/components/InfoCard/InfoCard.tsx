import { InfoCardType } from '@@types/home';
import PatternOne from '@assets/pattern-one.svg';
import PatternTwo from '@assets/pattern-two.svg';

import * as S from './styles';

interface IInfoCard {
  type: InfoCardType;
  onClick: () => Promise<boolean>;
  value?: number;
}

const InfoCard = ({ type, onClick, value }: IInfoCard) => {
  const title = type === 'visited' ? `내가 빌린 책\n반납까지` : `내가 빌리는\n중인 책`;

  return (
    <S.InfoCardWrapper type={type} onClick={onClick}>
      {type === 'visited' ? <PatternOne /> : <PatternTwo />}
      <S.Title>{title}</S.Title>
      <S.ValueArea>
        <S.Value>{value ?? '-'}</S.Value>
        <S.Suffix> 일</S.Suffix>
      </S.ValueArea>
      <S.Notification>자세히 보기 &gt;</S.Notification>
    </S.InfoCardWrapper>
  );
};

export default InfoCard;
