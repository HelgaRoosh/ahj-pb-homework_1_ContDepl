import demo from '../app';

test('возвращает значение', () => {
  const result = demo(6);
  expect(result).toBe(6);
});
