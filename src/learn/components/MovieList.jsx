/* eslint-disable no-unused-vars */

import styles from './MovieList.module.css';
import { ContentsPlaceholder, Placeholder } from './Placeholders';

const API_ENDPOINT = 'https://y-movies.pockethost.io/api';
const API_MOVIES = `${API_ENDPOINT}/collections/movies/records`;
const DUMMY_LIST = [{ id: 'dummy-1' }, { id: 'dummy-2' }, { id: 'dummy-3' }];

function MovieList() {
  // [미션 1] 데이터를 가져오기 위한 상태를 설정합니다.
  // ...

  // [미션 2] 데이터를 가져오는 사이드 이펙트 코드를 작성합니다.
  // 사이드 이펙트는 이벤트 핸들러 또는 이펙트 훅에서 처리되어야 합니다.
  // ...

  return (
    <ul className={styles.component}>
      {DUMMY_LIST.map((item) => (
        <li key={item.id}>
          <figure>
            <Placeholder text="PHOTO" height={140} width={100} />
            <figcaption>
              <em>{item?.title ?? <Placeholder text="HEADLINE" />}</em>
              <p>{item?.description ?? <ContentsPlaceholder />}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
