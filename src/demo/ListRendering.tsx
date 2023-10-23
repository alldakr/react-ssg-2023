import musicList from '@/api/music.json';
import { Icon, IconButton } from '@/components';
import type { Styles, RestPropsWithChildren } from '@/types';

const styles: Styles = {
  headline: {
    marginTop: 32,
    marginBottom: 0,
    fontSize: 24,
  },
  description: { marginBlock: 0 },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBlock: 12,
    paddingLeft: '1rem',
  },
  listHeadline: {
    marginBlock: 0,
    lineHeight: 1,
    fontSize: 16,
  },
  like: {
    fontSize: 12,
  },
  normal: {
    fontStyle: 'normal',
    fontSize: 14,
  },
};

export function ListRendering(props: RestPropsWithChildren): JSX.Element {
  return (
    <div lang="en" {...props}>
      <h3 style={styles.headline}>{musicList.title}</h3>
      <p style={styles.description}>{musicList.description}</p>

      <div style={{ marginTop: 16 }}>
        <IconButton
          mode="secondary"
          size="sm"
          rounded="full"
          iconLeft={<Icon type="plus" mode="secondary" />}
        >
          추가
        </IconButton>
      </div>

      <ul style={styles.list}>
        {musicList.items.map(({ id, title, like, singer }) => (
          <li key={id}>
            <h4 style={styles.listHeadline}>
              {title} <span style={styles.like}>({like})</span>
            </h4>
            <em style={styles.normal}>{singer}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
