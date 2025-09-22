import API from "../api";

export const postAuth = async (data: any) => {
  try {
    const response = await API("https://dummyjson.com/auth/login");

    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};
