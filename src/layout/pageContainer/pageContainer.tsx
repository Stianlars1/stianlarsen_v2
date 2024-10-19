import styling from "./css/contentStyling.module.css";
import styles from "./css/pageContainer.module.css";
export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${styles.pageContainer} ${styling.contentStyling}`}>
      {children}
    </main>
  );
};
