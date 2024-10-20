import styles from "./css/page.module.css";
export const Page = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.page}>{children}</div>;
};
