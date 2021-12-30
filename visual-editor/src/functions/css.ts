/**
 * I know this is ugly...
 * See: https://github.com/emotion-js/emotion/issues/1105
 */
export const disableEmotionWarnings = () => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  /* eslint-disable no-console */
  const log = console.error.bind(console);
  console.error = (...args) => {
    /* eslint-enable no-console */
    if (
      args[0].indexOf("The pseudo class") + args[0].indexOf(
        "is potentially unsafe when doing server-side rendering. Try changing it to"
      ) > -2
    ) {
      return;
    }
    log(...args);
  };
};