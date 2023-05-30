export const filmLoader = async ({ params }: any) => {
  console.log(params, "params");
  return params.id;
};
