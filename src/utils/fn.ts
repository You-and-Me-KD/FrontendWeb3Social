export const getErrorMessage = async (error: string | string[]): Promise<string> => {
  if (Array.isArray(error)) {
    return `common.error.${error[0]}`;
  }
  return `common.error.${error}`;
};

export const sleep = async (time: number) => {
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );
};
