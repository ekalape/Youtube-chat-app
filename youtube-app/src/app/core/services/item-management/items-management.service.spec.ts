import { TestBed } from '@angular/core/testing';

import { ItemsManagementService } from './items-management.service';

describe('ItemsManagementService', () => {
  let service: ItemsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
