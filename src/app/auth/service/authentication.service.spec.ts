import {TestBed} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('user make login', () => {
  });
  it('user make logout', () => {
    service.logout();
    expect(service.isUserLoggedIn()).toBeFalse();
  });
  it('check if user is logged with logout', () => {
    service.logout();
    expect(service.isUserLoggedIn()).toBeFalse();
  });
  it('check if user is logged with login', () => {
    service.login("","");
    expect(service.isUserLoggedIn()).toBeTruthy();
  });
});
