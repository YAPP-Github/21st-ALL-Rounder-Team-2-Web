"use client";

import { useMessage } from "@/hooks/useMessage";

export default function Page() {
  const { actionName, actionPayload } = useMessage({ actionName: "TEST_MESSAGE" });

  return (
    <div style={{ color: "white" }}>
      <div>actionName: {actionName}</div>
      <div>actionPayload: {JSON.stringify(actionPayload, null, 4)}</div>
    </div>
  );
}
