// telegram.d.ts
interface Window {
  Telegram: {
    WebApp: {
      ready: () => void;
      expand: () => void;
      initData: string;
      initDataUnsafe: {
        user?: {
          id: number;
          first_name: string;
          username?: string;
        };
      };
    };
  };
}