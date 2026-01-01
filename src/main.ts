import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Voucher } from './app/voucher/voucher';

bootstrapApplication(Voucher, appConfig)
  .catch((err) => console.error(err));
