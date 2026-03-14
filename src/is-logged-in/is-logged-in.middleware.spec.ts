import { IsLoggedInMiddleware } from './is-logged-in.middleware';

describe('IsLoggedInMiddleware', () => {
  it('should be defined', () => {
    expect(new IsLoggedInMiddleware()).toBeDefined();
  });
});
