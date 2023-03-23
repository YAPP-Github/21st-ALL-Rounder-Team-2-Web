import { handlers as ArtworkHandlers } from "./handlers/artwork";
import { handlers as CalendarHandlers } from "./handlers/calendar";
import { handlers as CategoryHandler } from "./handlers/category";
import { handlers as ExhibitHandlers } from "./handlers/exhibition";

export const handlers = [...ArtworkHandlers, ...CalendarHandlers, ...CategoryHandler, ...ExhibitHandlers];
