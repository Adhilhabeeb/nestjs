import { CheckUserIdMiddleware } from './check-user-id.middleware';

describe('CheckUserIdMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckUserIdMiddleware()).toBeDefined();
  });
});
