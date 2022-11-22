import axios from 'axios';
import { IMyOmakase } from '@recoil/myOmakaseState';
import { Omakases } from '@recoil/omakaseState';
import { IRankerState } from '@recoil/rankerState';

export interface IUserReturnType {
  nickname: string;
  profile_url: string;
  stamp_count: number;
  ranking: number;
  power: number;
}

interface IRequestOmakasesBody {
  level?: 'HIGH' | 'MIDDLE' | 'ENTRY';
  keyword?: string;
  size?: number;
  page?: number;
}

export interface IResponseOmakases {
  omakases: Omakases[];
  total_elements: number;
}

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT });

console.log(process.env.API_ENDPOINT);

export let isTokenOnHeader = false;
export const setAccessTokenOnHeader = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  isTokenOnHeader = true;
};
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI1NDE1NDMyOTciLCJ1c2VyX2lkIjoxLCJpYXQiOjE2NjkxMzMyNDMsImV4cCI6MTc3Mzk1MzMyNDN9.7vzgrghnhZbUNNnwCZA-JowUkbZxl3wip1k54b1ijMQ';

axios.defaults.baseURL = 'http://3.34.67.144:3000/';
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const requestSignup = (form: FormData) => instance.post(`/user`, form);
export const requestDeleteUser = () => instance.delete(`/user`);
export const requestLogout = () => instance.delete(`/logout`);
export const requestCheckDuplicateName = (name: string) =>
  instance.get(`/user/check?nickname=${name}`);
export const requestOmakases = (param: IRequestOmakasesBody) => {
  const pageURLSuffix = `?page=${param.page ?? 0}`;
  const sizeURLSuffix = param.size ? `&size=${param.size}` : '';
  const levelURLSuffix = param.level ? `&level=${param.level}` : '';
  const keywordURLSuffix = param.keyword ? `&keyword=${param.keyword}` : '';
  return instance.get<IResponseOmakases>(
    `/omakases${pageURLSuffix}${sizeURLSuffix}${levelURLSuffix}${keywordURLSuffix}`,
  );
};

export const requestSpecificOmakase = (id: number) => instance.get(`/omakase/${id}`);
export const requestLike = (id: number) => instance.patch(`/recommendation/${id}`);
export const requestMyRanking = () => instance.get(`/my-ranking`);
export const requestRankers = (limit?: number) =>
  instance.get<IRankerState[]>(`/rankers?limit=${limit}`);
export const requestMyInfo = () => instance.get<IUserReturnType>(`/user`);
export const requestUserInfo = (email?: string) => instance.get(`/user/${email}`);
export const requestMyOmakase = () => instance.get<IMyOmakase[]>(`/my-omakase`);
export const requestVisitedOmakase = (email?: string) =>
  instance.get<IMyOmakase[]>(`/my-omakase/${email}`);
export const requestChangeNickname = (nickname: string) => instance.patch(`/user`, { nickname });
export const requestStamp = (formData: FormData) =>
  instance.post(`/stamp`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const requestChangeProfilePhoto = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  return instance.patch(`/user/profile`, formData);
};
export const requestUserProfile = () => instance.get(`/user/profile`);

export const requestCheckOmakaseIsCertificated = (id: number) =>
  instance.get(`/omakase/check?id=${id}`);

// Homebrary API
export const getHome = () => instance.get(`/api/v1/home/feed`).then((res) => res.data.body);
export const getMyData = () => instance.get(`/api/v1/user/me/mypage`).then((res) => res.data.body);
export const changeNickname = (nickname: string) =>
  instance.put(`/api/v1/user/me/nickname`, { nickname });
export const checkDuplicateName = (nickname: string) =>
  instance
    .post(`/api/v1/user/me/nickname/validate`, { nickname: nickname })
    .then((res) => res.data.body);
export const changeProfilePhotoImage = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  return instance.put(`/api/v1/user/me/image`, formData);
};
