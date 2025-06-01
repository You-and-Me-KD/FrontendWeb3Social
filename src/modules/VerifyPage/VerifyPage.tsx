"use client";
import { useVerifyMutation } from "@/apis/auths";
import { LoadingAllPage, Toast } from "@/components";
import useSearchParams from "@/hooks/useSearchParams";
import useTranslations from "@/hooks/useTranslations";
import { useRouter } from "@/i18n/navigation";
import { RouteEnum } from "@/types/route";

import { FC, useEffect } from "react";

const VerifyPage: FC = () => {
  const { mutate } = useVerifyMutation();
  const { t } = useTranslations("common");

  const { searchParams } = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      mutate(
        { token },
        {
          onSuccess: () => {
            Toast.success({
              label: t("toast.success.verify-success"),
              description: t("success.EMAIL_VERIFICATION_SUCCESS"),
            });
            router.push(RouteEnum.HOME);
          },
          onError: async () => {
            Toast.error({
              label: t("toast.error.verify-error"),
              description: t("error.VERIFY_EMAIL_FAILED"),
            });
            router.push({
              pathname: RouteEnum.HOME,
              query: {
                tab: "resend",
              },
            });
          },
        }
      );
    }
  }, []);

  return <LoadingAllPage title="VERIFYING..." />;
};

export default VerifyPage;
