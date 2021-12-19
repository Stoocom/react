import reducer, { changeNameProfile } from './profileReducer';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      isShowName: true,
      nameUser: "Alexander"
    }
  )
})

test('should change name', () => {
  const previousState = {
    isShowName: true,
    nameUser: "Alexander"
  };
  expect(reducer(previousState, changeNameProfile('Andrey'))).toEqual(
    {
      isShowName: true,
      nameUser: "Andrey"
    }
  )
})
