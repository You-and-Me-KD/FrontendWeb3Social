import { authRequest } from "../axios";
import { KEYS } from "./keys";
import {
  IForgotPasswordRequest,
  IGetMeResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IResendRequest,
  IResetPasswordRequest,
  IVerifyTokenRequest,
} from "./types";

export const loginRequest = async (params: ILoginRequest): Promise<ILoginResponse> => {
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

export const registerRequest = async (params: IRegisterRequest): Promise<IRegisterResponse> => {
  const { data } = await authRequest.post<IRegisterResponse>(KEYS.REGISTER, params);
  return data;
};

export const verifyToken = async (params: IVerifyTokenRequest): Promise<IGetMeResponse> => {
  const { data } = await authRequest.post<IGetMeResponse>(KEYS.VERIFY, params);
  return data;
};

export const resendVerification = async (params: IResendRequest): Promise<IGetMeResponse> => {
  const { data } = await authRequest.post<IGetMeResponse>(KEYS.RESEND, params);
  return data;
};

export const forgotPassword = async (params: IForgotPasswordRequest): Promise<IGetMeResponse> => {
  const { data } = await authRequest.post<IGetMeResponse>(KEYS.FORGOT_PASSWORD, params);
  return data;
};

export const resetPassword = async (params: IResetPasswordRequest): Promise<IGetMeResponse> => {
  const { data } = await authRequest.post<IGetMeResponse>(KEYS.RESET_PASSWORD, params);
  return data;
};
