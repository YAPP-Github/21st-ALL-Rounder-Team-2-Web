import { headers } from "next/headers";

export default function Page() {
  const headerInstance = headers();
  const authorization = headerInstance.get("authorization");

  return <h1 style={{ color: "white" }}>authorization: {authorization}</h1>;
}
