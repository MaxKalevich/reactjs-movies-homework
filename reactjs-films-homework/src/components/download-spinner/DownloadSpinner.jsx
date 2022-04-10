import styles from "./download-spinner-style.module.scss";

const DownloadSpinner = () => {
  return (
    <img className={styles.spinner} src="/download_spinner.svg" alt="spinner" />
  );
};

export default DownloadSpinner;
