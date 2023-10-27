// 참고: https://bit.ly/3Sk9oAj

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const COLORS = {
  valid: '#0a7ea4',
  invalid: '#a4240a',
};

const FONT_SIZE = {
  headline: '16px',
  log: '14px',
};

const FONT_WEIGHT = 700;

const CONSOLE_STYLES = {
  valid: {
    headline: `font-weight: ${FONT_WEIGHT}; font-size: ${FONT_SIZE.headline}; color: ${COLORS.valid}`,
  },
  invalid: {
    headline: `font-weight: ${FONT_WEIGHT}; font-size: ${FONT_SIZE.headline}; color: ${COLORS.invalid}`,
    log: `font-weight: ${FONT_WEIGHT}; font-size: ${FONT_SIZE.log}; color: ${COLORS.invalid}`,
  },
};

/* -------------------------------------------------------------------------- */

function useHTMLValidate() {
  const location = useLocation();

  const pathname = decodeURIComponent(location.pathname);

  useEffect(() => {
    const controller = new AbortController();

    const html = `
      <!DOCTYPE html>
      <html lang="ko-KR">
        <head>
          <meta charset="UTF-8" />
          <title>웹 표준 검사</title>
        </head>
        ${document.body.outerHTML}
      </html>
    `;

    const formData = new FormData();

    formData.append('out', 'json');
    formData.append('content', html);

    fetch('http://html5.validator.nu/?out=json', {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.messages.length === 0) {
          console.info(
            `%c✅ "${pathname}" 페이지에 문법 오류는 없습니다. 😃`,
            CONSOLE_STYLES.valid.headline
          );
        } else {
          console.warn(
            `%c⛔️ "${pathname}" 페이지에 HTML 문법 검사 결과 오류가 발견되었습니다. 😳`,
            CONSOLE_STYLES.invalid.headline
          );
          result.messages.forEach(({ message, extract }) => {
            console.error(
              `%c${message}\n\t${extract}`,
              CONSOLE_STYLES.invalid.log
            );
          });
        }
      })
      .catch((error) => {
        if (!(error instanceof DOMException)) {
          console.error(error.message);
        }
      });

    return () => {
      controller.abort();
    };
  }, [pathname]);
}

export default useHTMLValidate;
