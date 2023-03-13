import { handlers as CategoryHandler } from "./handlers/category";
import { handlers as ExhibitHandlers } from "./handlers/exhibition";

export const handlers = [...CategoryHandler, ...ExhibitHandlers];
