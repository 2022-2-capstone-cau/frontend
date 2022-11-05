import Link from 'next/link';
import { useRouter } from 'next/router';

import HomeIcon from '@assets/home_line.svg';
import MyPageIcon from '@assets/person_outline.svg';
import RankingIcon from '@assets/ranking_line.svg';
import SearchIcon from '@assets/search_line.svg';

import * as S from './styles';

const BottomNav = () => {
  const router = useRouter();

  return (
    <S.BottomNav className="container">
      <Link
        href="/home"
        passHref
        className={`nav-link ${router.pathname === '/home' ? 'active' : ''}`}
      >
        <HomeIcon className="svg-path" />
        <span>홈</span>
      </Link>

      <Link
        href="/search"
        passHref
        className={`nav-link ${router.pathname === '/search' ? 'active' : ''}`}
      >
        <SearchIcon className="svg-complicated" />
        <span>책 검색</span>
      </Link>

      <Link
        href="/ranking"
        passHref
        className={`nav-link ${router.pathname === '/ranking' ? 'active' : ''}`}
      >
        <RankingIcon className="svg-paths" />
        <span>채팅</span>
      </Link>

      <Link
        href="/mypage"
        passHref
        className={`nav-link ${router.pathname === '/mypage' ? 'active' : ''}`}
      >
        <MyPageIcon className="svg-paths" />
        <span>MY 페이지</span>
      </Link>
    </S.BottomNav>
  );
};

export default BottomNav;
