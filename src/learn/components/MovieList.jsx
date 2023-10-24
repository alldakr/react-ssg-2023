import styles from './MovieList.module.css';
import { ContentsPlaceholder, Placeholder } from './Placeholders';

const API_ENDPOINT = 'https://y-movies.pockethost.io/api';
const API_MOVIES = `${API_ENDPOINT}/collections/movies/records`;

console.log(API_MOVIES);

function MovieList() {
  // 데이터 가져오기 상태 설정

  // 데이터 가져오기 사이드 이펙트 설정

  return (
    <ul className={styles.component}>
      {[{}].map((item) => (
        <li key={item.id}>
          <figure>
            <Placeholder text="PHOTO" height={140} width={100} />
            <figcaption>
              <em>{item.title ?? <Placeholder text="HEADLINE" />}</em>
              <p>{item.description ?? <ContentsPlaceholder />}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
