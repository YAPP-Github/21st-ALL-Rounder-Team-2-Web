import { Client } from "@/app/test/token/client";
import { axiosInstance } from "@/libs/axios";
import { BASE_PATH } from "@/__generate__/artwork/base";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import Button from "@/components/ui/Button/Button/Button";

async function getMe() {
  const headerInstance = headers();
  const cookieInstance = cookies();
  const authorization = headerInstance.get("authorization");
  const accessToken = cookieInstance.get("accessToken")?.value;
  axiosInstance.defaults.headers.common["Authorization"] = authorization ?? accessToken; // setAccessToken

  const res = await axiosInstance({
    url: `${BASE_PATH}/user/me`,
  });

  return res;
}

export default async function Page() {
  const headerInstance = headers();
  const cookieInstance = cookies();
  const res = await getMe();

  return (
    <div style={{ color: "white" }}>
      <div>authorization: {JSON.stringify(headerInstance.get("authorization"))}</div>
      <div>
        <h2>server-side</h2>
        <div>timestamp: {new Date().toISOString()}</div>
        <div>cookie: {cookieInstance.get("accessToken")?.value}</div>
        <pre>request header: {JSON.stringify(res.config.headers, null, 4)}</pre>
        <pre>response data: {JSON.stringify(res.data, null, 4)}</pre>
        <Link href={`/test-token?time=${Date.now()}`}>
          <Button type="primary">Link</Button>
        </Link>
        <Client />
      </div>
    </div>
  );
}
