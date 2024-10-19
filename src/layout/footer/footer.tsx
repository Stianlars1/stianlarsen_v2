import styles from "./css/footer.module.css";
export const Footer = () => {
  const year = new Date().getFullYear();
  const copyrighttext = `© ${year}`;
  const fullCopyrightText = copyrighttext + " Stian Larsen";
  return (
    <footer className={styles.footer}>
      <p>{fullCopyrightText}</p>
    </footer>
  );
};
