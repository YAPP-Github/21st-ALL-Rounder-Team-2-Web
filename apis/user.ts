import { axiosInstance } from "@/libs/axios";
import { GetUserJoinDateControllerApiFactory } from "@/__generate__/user";

const factory = GetUserJoinDateControllerApiFactory(undefined, undefined, axiosInstance);

export const getUserJoinDate = async () => {
  const response = await factory.getUserJoinDate();
  return response.data;
};
