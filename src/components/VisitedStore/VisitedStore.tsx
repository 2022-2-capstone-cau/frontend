import { DEFAULT_IMAGE_URL } from '@constants/omakase';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

export interface VisitedStoreProps {
  value: {
    id?: string;
    thumbnailUrl?: string;
    title?: string;
    rentedAt?: string;
    returnAt?: string;
    isRent?: boolean;
  };
}

const VisitedStore = ({
  value: { id, thumbnailUrl, title, rentedAt, returnAt, isRent },
}: VisitedStoreProps) => {
  return (
    <S.StoreDisplay>
      <Link href={`/search/${id}`} passHref>
        <S.StoreImageWrapper>
          <Image
            src={thumbnailUrl ? thumbnailUrl : DEFAULT_IMAGE_URL}
            alt="매장 이미지 미리보기"
            fill
          />
        </S.StoreImageWrapper>
        <S.StoreDescriptionWrapper>
          <h1 className="store-title">{title}</h1>
          {rentedAt && returnAt && <pre className="store-desc">{`${rentedAt} ~ ${returnAt}`}</pre>}
          {isRent && <span className="store-desc">대여중</span>}
        </S.StoreDescriptionWrapper>
      </Link>
    </S.StoreDisplay>
  );
};

export default VisitedStore;
