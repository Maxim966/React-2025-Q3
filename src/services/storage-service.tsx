const KEY_FOR_SAVE_TO_LOCALSTORAGE = '[rs-react-app]';

export default class LocalStorageService {
  static get<T>(defaultValue: T): T {
    try {
      const data = localStorage.getItem(KEY_FOR_SAVE_TO_LOCALSTORAGE);
      return data ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  static set(value: unknown): void {
    localStorage.setItem(KEY_FOR_SAVE_TO_LOCALSTORAGE, JSON.stringify(value));
  }

  remove(): void {
    localStorage.clear();
  }
}
