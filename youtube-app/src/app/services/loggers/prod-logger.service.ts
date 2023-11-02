import { Injectable, isDevMode } from '@angular/core';
import { BaseLoggerService } from './BaseLoggerService';

@Injectable({
  providedIn: 'root',
})
export class ProdLoggerService extends BaseLoggerService {
  override prefix = '[PROD]';

  override logMessage(message: string) {
    if (!isDevMode()) super.logMessage(message);
  }
}
