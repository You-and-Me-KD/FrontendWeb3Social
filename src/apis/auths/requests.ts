import { authRequest } from "../axios";
import { KEYS } from "./keys";
import {
  IGetMeResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IVerifyTokenRequest,
} from "./types";

export const loginRequest = async (
  params: ILoginRequest
): Promise<ILoginResponse> => {
  const { data } = await authRequest.post<ILoginResponse>(KEYS.LOGIN, params);
  return data;
};

export const getMe = async (): Promise<IGetMeResponse> => {
  const { data } = await authRequest.get<IGetMeResponse>(KEYS.ME);
  return data;
};

export const logoutRequest = async (): Promise<void> => {
  await authRequest.post<void>(KEYS.LOGOUT);
};

export const registerRequest = async (
  params: IRegisterRequest
): Promise<IRegisterResponse> => {
  const { data } = await authRequest.post<IRegisterResponse>(
    KEYS.REGISTER,
    params
  );
  return data;
};

export const verifyToken = async (
  params: IVerifyTokenRequest
): Promise<IGetMeResponse> => {
  const { data } = await authRequest.post<IGetMeResponse>(KEYS.VERIFY, params);
  return data;
};
