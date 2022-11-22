import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { requestError } from '@@types/shared';
import ModalLayout from '@components/Layout/ModalLayout';
import ProfileImage from '@components/ProfileImage';
import { COMMON_ERROR, NETWORK_ERROR, UNKNOWN_ERROR } from '@constants/error';
import { UNDEF } from '@constants/shared';
import { showAlertModal, showConfirmModal } from '@utils/modal';
import { changeProfilePhotoImage } from '@request';

const ChangePhoto = () => {
  const router = useRouter();
  const [thumbnail, setThumbnail] = useState<File | undefined>();

  const changeProfilePhoto = async () => {
    if (!thumbnail) return;
    if (!showConfirmModal('프로필사진을 변경하시겠습니까?')) return;

    try {
      await changeProfilePhotoImage(thumbnail);
      showAlertModal('프로필사진 변경이 완료되었습니다.');
      router.push('/mypage');
    } catch (error) {
      const { response } = error as requestError;
      if (!response) return showAlertModal(NETWORK_ERROR);

      const { status } = response;
      if (COMMON_ERROR[status]) return showAlertModal(COMMON_ERROR[status]);
      return showAlertModal(UNKNOWN_ERROR);
    }
  };

  return (
    <ModalLayout
      title=""
      buttonContent="변경하기"
      clickHandler={changeProfilePhoto}
      disabled={thumbnail === UNDEF}
    >
      <NotifyParagraph>
        {/*<b>{nickname}</b>*/}
        프로필사진
      </NotifyParagraph>
      <ProfileImage thumbnail={thumbnail} setThumbnail={setThumbnail} />
    </ModalLayout>
  );
};

export default ChangePhoto;

const NotifyParagraph = styled.p`
  position: absolute;
  width: 100%;
  top: 20%;
  ${({ theme }) => theme.fonts.header2_5};
  text-align: center;

  b {
    font-weight: bold;
  }
`;
