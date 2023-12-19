import { first } from 'rxjs';
import { SortingRule } from 'src/app/utils/enums/sorting-rules';
import { ItemsManagementService } from './items-management.service';

describe('Filtering/sorting service test', () => {
  let service: ItemsManagementService;

  beforeEach(() => {
    service = new ItemsManagementService();
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly record searchword', (done) => {
    service.setSearchWord('test');
    service.currentData.pipe(first()).subscribe((val) => {
      expect(val.searchWord).toBe('test');
      done();
    });
  });
  it('should correctly record filterword', (done) => {
    service.setFilterWord('test');
    service.currentData.pipe(
      first(),
    ).subscribe((val) => {
      expect(val.filterWord).toBe('test');
      done();
    });
  });
  it('should correctly record sorting', (done) => {
    service.setSorting('dateDown');
    service.currentData.pipe(
      first(),
    ).subscribe((val) => {
      expect(val.sorting).toBe(SortingRule.DATE_DOWN);
      done();
    });
  });
  it('should return null sorting', (done) => {
    service.setSorting('test');

    service.currentData.pipe(
      first(),
    ).subscribe({
      next: (val) => {
        expect(val.sorting).toBeNull();
        done();
      },
    });
  });
});
