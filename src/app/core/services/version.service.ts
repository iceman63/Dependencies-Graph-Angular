import { Injectable } from '@angular/core';

import { version } from '../../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  version: string = version;
}
