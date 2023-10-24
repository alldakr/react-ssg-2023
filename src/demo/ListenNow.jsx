import { Icon, IconButton, TabMenu, MusicCardList } from '@/components';
import styles from './ListenNow.module.css';

export function ListenNow(props) {
  return (
    <section className={styles.component} lang="en" {...props}>
      <div role="group" className={styles.topView}>
        <TabMenu />
        <IconButton iconLeft={<Icon />} rounded="md">
          Add Music
        </IconButton>
      </div>
      <div role="group" className={styles.headline}>
        <h2>Listen Now</h2>
        <p>Top picks for you. Updated daily.</p>
      </div>
      <MusicCardList />
    </section>
  );
}
