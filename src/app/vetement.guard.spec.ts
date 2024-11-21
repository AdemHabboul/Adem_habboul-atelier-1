import { VetementGuard } from './vetement.guard';
import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';


describe('gameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => vetementGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
