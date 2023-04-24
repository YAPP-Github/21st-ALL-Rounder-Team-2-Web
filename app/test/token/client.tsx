"use client";

import { axiosInstance } from "@/libs/axios";
import { BASE_PATH } from "@/__generate__/artwork/base";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/Button/Button/Button";
import { useState, useEffect } from "react";

const getMe = async () => {
  const response = await axiosInstance({
    url: `${BASE_PATH}/user/me`,
  });
  return response;
};

const useGetMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });
};

export const Client = () => {
  const { data, refetch } = useGetMe();
  const [timestamp, setTimestamp] = useState<Date>();
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    setTimestamp(new Date());
  }, [data]);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((e) => e.startsWith("accessToken="))
      ?.split("=")[1];
    setCookie(cookie ?? "");
  }, []);

  return (
    <>
      <h2>client-side</h2>
      <div>timestamp: {timestamp?.toISOString()}</div>
      <div>cookie: {cookie}</div>
      <pre>request headers:{JSON.stringify(data?.config.headers, null, 4)}</pre>
      <pre>response data: {JSON.stringify(data?.data, null, 4)}</pre>
      <Button type="primary" onClick={() => refetch()}>
        Refetch
      </Button>
    </>
  );
};
