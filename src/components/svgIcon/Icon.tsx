import './Icon.css';

type Props = {
  mode?: 'primary' | 'secondary';
  type?: 'plus' | 'minus';
  size?: number;
};

function Icon({
  mode = 'primary',
  type = 'plus',
  size = 16,
}: Props): JSX.Element {
  const fillColor = mode.includes('primary') ? '#F8F9FA' : '#495057';

  let NestedComponent = null;

  switch (type) {
    default:
    case 'plus':
      NestedComponent = Plus;
      break;
    case 'minus':
      NestedComponent = Minus;
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <NestedComponent fill={fillColor} />
    </svg>
  );
}

interface IconProps {
  fill: string;
}

function Plus({ fill }: IconProps): JSX.Element {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14.0667C11.3505 14.0667 14.0667 11.3505 14.0667 8C14.0667 4.64947 11.3505 1.93333 8 1.93333C4.64947 1.93333 1.93333 4.64947 1.93333 8C1.93333 11.3505 4.64947 14.0667 8 14.0667ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        fill={fill}
      />
      <path
        d="M7.40606 11.447V4.73334H8.31288V11.447H7.40606ZM4.5 8.54091V7.6394H11.2189V8.54091H4.5Z"
        fill={fill}
      />
    </>
  );
}

function Minus({ fill }: IconProps): JSX.Element {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14.0667C11.3505 14.0667 14.0667 11.3505 14.0667 8C14.0667 4.64947 11.3505 1.93333 8 1.93333C4.64947 1.93333 1.93333 4.64947 1.93333 8C1.93333 11.3505 4.64947 14.0667 8 14.0667ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        fill={fill}
      />
      <path d="M4.5 8.54092V7.6394H11.2189V8.54092H4.5Z" fill={fill} />
    </>
  );
}

export default Icon;
