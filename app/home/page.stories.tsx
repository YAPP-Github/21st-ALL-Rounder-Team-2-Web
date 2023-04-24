import { Meta } from "@storybook/react";
import { AppBar } from "./components/AppBar/AppBar";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { SortDirectionSelect } from "./components/SortDirectionSelect/SortDirectionSelect";
import { ExhibitionCardList } from "./components/ExhibitionCardList/ExhibitionCardList";
import styles from "./page.module.css";

export default {
  title: "app/home",
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
    layout: "fullscreen",
  },
} as Meta;

export const Template = () => (
  <>
    <AppBar />
    <div className={styles.category}>
      <CategoryList />
    </div>
    <div className={styles.select}>
      <SortDirectionSelect />
    </div>
    <ExhibitionCardList direction="DESC" />
  </>
);
