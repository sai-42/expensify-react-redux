import { login, logout } from '../../actions/auth';

test('should generate action login object', () => {
  const uid = 'abs123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate action logout object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});