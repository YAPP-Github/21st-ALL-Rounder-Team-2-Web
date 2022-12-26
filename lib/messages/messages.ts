

type Actions = {
    NAVIGATE_TO_MY: {
        payload: {
            userId: string;
        }
    },
    NAVIGATE_TO_EDIT: {
    }
}

export type ActionNames = keyof Actions;

export type ActionParam<ActionName extends ActionNames> =
Actions[ActionName] extends { payload: infer TPath extends Record<string, string> }
    ? [ActionName, TPath]
    : [ActionName];


export const makeAction = <Path extends ActionNames>(params: ActionParam<Path>) => {
    const [actionName, payload] = params
    return {
        action: actionName,
        payload,
    }
}

