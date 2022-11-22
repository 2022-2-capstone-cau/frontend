import { atomFamily, selector, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { isTokenOnHeader, getMyData } from '@request';

const DEFAULT_USER_STATE = {
  user: {
    user_id: '',
    name: '',
    profile: '',
  },
};

const triggerState = atomFamily({
  key: 'triggerState',
  default: Date.now(),
});

const userValue = selector({
  key: 'userValue',
  get: async ({ get }) => {
    get(triggerState('userValue'));
    if (!isTokenOnHeader) return DEFAULT_USER_STATE;

    const { data } = await getMyData();
    return data;
  },
});

export const useFetchUserValue = () => useRecoilValueLoadable(userValue);
export const useRefetchUserValue = () => useSetRecoilState(triggerState('userValue'));
