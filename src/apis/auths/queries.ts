import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  forgotPassword,
  getMe,
  loginRequest,
  registerRequest,
  resendVerification,
  resetPassword,
  verifyToken,
} from "./requests";
import { KEYS } from "./keys";
import {
  IGetMeResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IResendRequest,
  IResetPasswordRequest,
  IVerifyTokenRequest,
} from "./types";
import { IAxiosResponse } from "@/types/common";

export const useGetMe = (options: Omit<UseQueryOptions<IGetMeResponse, Error>, "queryKey">) => {
  return useQuery<IGetMeResponse, Error>({
    queryKey: [KEYS.ME],
    queryFn: getMe,
    ...options,
  });
};

export const useLoginMutation = () => {
  return useMutation<ILoginResponse, IAxiosResponse, ILoginRequest>({
    mutationKey: [KEYS.LOGIN],
    mutationFn: loginRequest,
  });
};

export const useRegisterMutation = () => {
  return useMutation<IRegisterResponse, IAxiosResponse, IRegisterRequest>({
    mutationKey: [KEYS.REGISTER],
    mutationFn: registerRequest,
  });
};

export const useVerifyMutation = () => {
  return useMutation<IGetMeResponse, IAxiosResponse, IVerifyTokenRequest>({
    mutationKey: [KEYS.VERIFY],
    mutationFn: verifyToken,
  });
};

export const useResendVerificationMutation = () => {
  return useMutation<IGetMeResponse, IAxiosResponse, IResendRequest>({
    mutationKey: [KEYS.RESEND],
    mutationFn: resendVerification,
  });
};

export const useForgotPassword = () => {
  return useMutation<IGetMeResponse, IAxiosResponse, IResendRequest>({
    mutationKey: [KEYS.FORGOT_PASSWORD],
    mutationFn: forgotPassword,
  });
};

export const useResetPasswordMutation = () => {
  return useMutation<IGetMeResponse, IAxiosResponse, IResetPasswordRequest>({
    mutationKey: [KEYS.RESET_PASSWORD],
    mutationFn: resetPassword,
  });
};
