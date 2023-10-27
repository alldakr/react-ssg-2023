/* eslint-disable no-unused-vars */

import styles from './MovieList.module.css';
import useFetchData from '@/hooks/useFetchData';
import { ContentsPlaceholder, Placeholder } from './Placeholders';

const API_ENDPOINT = 'https://y-movies.pockethost.io/api';
const API_MOVIES = `${API_ENDPOINT}/collections/movies/records`;
const DUMMY_LIST = [{ id: 'dummy-1' }, { id: 'dummy-2' }, { id: 'dummy-3' }];

function MovieList() {
  const { status, error, data } = useFetchData(
    `${API_MOVIES}?page=2&perPage=6&sort=-release`
  );

  if (status === 'loading') {
    return <div role="alert">로딩 중....</div>;
  }

  if (status === 'error') {
    return <div role="alert">{error.toString()}</div>;
  }

  // status === 'success'
  return (
    <ul className={styles.component}>
      {data?.items?.map((item) => (
        <li key={item.id}>
          <figure>
            {item?.poster ? (
              <img
                src={`${API_ENDPOINT}/files/${item.collectionId}/${item.id}/${item.poster}`}
                alt=""
                height={140}
              />
            ) : (
              <Placeholder text="PHOTO" height={140} width={100} />
            )}
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
