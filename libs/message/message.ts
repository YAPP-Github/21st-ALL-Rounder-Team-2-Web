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
    EDIT_BOTTOM_SHEET_SAVE: {
        payload: {
            author: string;
            name: string;
            tags: string[];
        }
    },
    EDIT_BOTTOM_SHEET_CONTINUE: {
        payload: {
            author: string;
            name: string;
            tags: string[];
        }
    },
    NAVIGATE_TO_CAMERA: {},
    NAVIGATE_TO_GALLERY: {},
}

export type ActionNames = keyof Actions;

export type ActionParam<ActionName extends ActionNames> =
Actions[ActionName] extends { payload: infer TPath extends Record<string, any> }
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
    const jsonData = JSON.stringify(data);
    const appPostMessage = window.android?.postMessage ?? window.postMessage;
    appPostMessage(jsonData);
}

export const sendMessage = <ActionName extends ActionNames>(params: ActionParam<ActionName>) => {
    postMessage(makeAction(params));
};