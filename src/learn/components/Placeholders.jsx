import { number, string } from 'prop-types';

Placeholder.propTypes = {
  width: number,
  height: number,
  text: string,
};

export function Placeholder({ width = 220, height = 20, text = 'PHOTO' }) {
  return (
    <img src={`https://placehold.co/${width}x${height}?text=${text}`} alt="" />
  );
}

export function ContentsPlaceholder() {
  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        marginTop: 8,
      }}
    >
      <img style={{ height: 12 }} src="https://placehold.co/280x12?text=_" />
      <img style={{ height: 12 }} src="https://placehold.co/260x12?text=_" />
      <img style={{ height: 12 }} src="https://placehold.co/192x12?text=_" />
    </span>
  );
}
