import { Injectable, isDevMode } from '@angular/core';
import { BaseLoggerService } from './BaseLoggerService';

@Injectable({
  providedIn: 'root',
})
export class DevLoggerService extends BaseLoggerService {
  override prefix = '[DEV]';

  override logMessage(message: string) {
    if (isDevMode()) super.logMessage(message);
  }
}
