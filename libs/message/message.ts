import { isBrowser } from "../../utils/browser";


export type Actions = {
    NAVIGATE_TO_BELL: {},
    NAVIGATE_TO_CALENDAR: {},
    NAVIGATE_TO_MY: {
        payload: {
            userId: string;
        }
    },
    NAVIGATE_TO_EDIT: {
    },
}

export type ActionNames = keyof Actions;

export type ActionParam<ActionName extends ActionNames> =
Actions[ActionName] extends { payload: infer TPath extends Record<string, string> }
    ? [ActionName, TPath]
    : [ActionName];


export const makeAction = <ActionName extends ActionNames>(params: ActionParam<ActionName>) => {
    const [actionName, payload] = params
    return {
        action: actionName,
        payload,
    }
}

const postMessage = (data: unknown) => {
    if(!isBrowser) {
        return
    }
    window.postMessage(JSON.stringify(data))
}

export const sendMessage = <ActionName extends ActionNames>(params: ActionParam<ActionName>) => {
    postMessage(makeAction(params));
};