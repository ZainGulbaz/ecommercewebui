const getToast = (toast, { title, description, status }) => {
  return toast({
    title,
    description,
    status,
    duration: 3000,
    isClosable: true,
  });
};
export default getToast;
