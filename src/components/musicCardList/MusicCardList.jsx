import styles from './MusicCardList.module.css';
import musicList from '@/api/music.json';
import { getPublic } from '@/utils';
import Card from '../card/Card';

function MusicCardList() {
  return (
    <ul className={styles.component}>
      {musicList.items.map((item) => (
        <Card
          as="li"
          key={item.id}
          title={item.title}
          description={item.singer}
          photo={getPublic(`music/${item.photo}`)}
        />
      ))}
    </ul>
  );
}

export default MusicCardList;
