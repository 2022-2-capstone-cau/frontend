import Image from 'next/image';

import MessageBubble from '@assets/message-bubble.svg';
import RightButton from '@assets/ranking-card-right-button.svg';
import { RANK_SUFFIX, STAMP_AMOUNT_PREFIX, STAMP_AMOUNT_SUFFIX } from '@constants/shared';
import { IRankerState } from '@recoil/rankerState';

import * as S from './styles';
import { useRouter } from 'next/router';

const RankingCard = ({
  title,
  rankerInfoClickHandler,
}: {
  title?: string;
  rankerInfoClickHandler?: () => void;
}) => {
  const { push } = useRouter();

  return (
    <S.RankingCardWrapper className="ranking-card">
      <S.InfoArea>
        <S.StampAmount>{title}</S.StampAmount>
      </S.InfoArea>
      <S.RightButton>
        <RightButton onClick={rankerInfoClickHandler ?? (() => push('/ranking'))} />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

RankingCard.defaultProps = {
  ranker: {
    ranking: 0,
    nickname: '',
    stampCount: 0,
  },
};

export default RankingCard;
