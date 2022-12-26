import { useState, useEffect, useCallback } from "react";
import {
  ActionNames,
  Actions,
  postMessage,
  makeAction,
  ActionParam,
} from "../libs/message/message";
import { isBrowser } from "../utils/browser";

export function useMessage<ActionName extends ActionNames>(options: {
  actionName: ActionName;
}) {
  const { actionName } = options;
  const [payload, setPayload] = useState<Actions[ActionName] | null>(null);
  const sendMessage = useCallback((params: ActionParam<ActionName>) => {
    postMessage(makeAction(params));
  }, []);

  const handleMessage = useCallback((message: MessageEvent) => {
    if (!message.data) {
      return;
    }
    const payload = JSON.parse(message.data) as Actions[ActionName];
    setPayload(payload);
    console.log(payload);
  }, []);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    window.addEventListener("message", handleMessage);
  }, [handleMessage]);

  return {
    actionName,
    actionPayload: payload,
    sendMessage,
  };
}
