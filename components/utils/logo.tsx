import IconLogo from '../icons/icon-logo';
import styles from 'styles/logo.module.css';
import { SITE_NAME_MULTILINE } from '@lib/constants';

const Logo = ({ textSecondaryColor = 'var(--accents-5)' }) => {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>
        <IconLogo backgroundColor="var(--accents-1)" foregroundColor="black" />
      </div>
      <div className={styles.text}>
        <div>{SITE_NAME_MULTILINE[0]}</div>
        <div
          style={{ ['--color' as string]: textSecondaryColor }}
          className={styles['text-secondary']}
        >
          {SITE_NAME_MULTILINE[1]}
        </div>
      </div>
    </div>
  );
};

export default Logo;
