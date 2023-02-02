function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)));
}

const MAIN_FILE_NAME = "App.vue";

export const usePlayground = (source: string) => {
  const code = decodeURIComponent(source);
  const originCode = {
    [MAIN_FILE_NAME]: code,
  };

  const encoded = utoa(JSON.stringify(originCode));
  const link = `http://localhost:5173/#${encoded}`;
  return {
    encoded,
    link,
  };
};
