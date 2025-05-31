import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getMe, loginRequest, registerRequest, verifyToken } from "./requests";
import { KEYS } from "./keys";
import {
  IGetMeResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IVerifyTokenRequest,
} from "./types";
import { IAxiosResponse } from "@/types/common";

export const useGetMe = (
  options: Omit<UseQueryOptions<IGetMeResponse, Error>, "queryKey">
) => {
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