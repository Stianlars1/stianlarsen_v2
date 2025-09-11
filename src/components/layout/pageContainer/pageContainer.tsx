import styling from "./css/contentStyling.module.scss";
import styles from "./css/pageContainer.module.scss";
export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${styles.pageContainer} ${styling.contentStyling}`}>
      {children}
    </main>
  );
};
