import validateAction from '../validateAction';

jest.unmock('../validateAction');

describe('validateAction', () => {
  it('should accept object with type property actions', () => {
    const action = {
      type: 'TEST',
      data: {},
    };
    expect(validateAction(action)).toBeTruthy();
  });

  it('should reject Objects without type property', () => {
    expect(validateAction({})).toBeFalsy();
    expect(validateAction({ meta: {} })).toBeFalsy();
    expect(validateAction(() => {})).toBeFalsy();
    expect(validateAction([])).toBeFalsy();
  });
});
