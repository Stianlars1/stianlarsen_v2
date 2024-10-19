import { ReactNode } from "react";
import styles from "./css/orderedList.module.css";
export const OrderedList = ({ children }: { children: ReactNode }) => {
  return <ol className={styles.orderedList}>{children}</ol>;
};
