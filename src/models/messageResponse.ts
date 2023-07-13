const message = (status: number, message: string) => {
  const data = {
    status: status,
    message: message,
  };

  return data;
};

export { message };
