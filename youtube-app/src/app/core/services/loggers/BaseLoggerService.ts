export abstract class BaseLoggerService {
  abstract prefix: string;

  logMessage(message: string) {
    console.log(`${this.prefix} ${message}`);
  }
}
