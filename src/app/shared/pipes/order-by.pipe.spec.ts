import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const obj1 = {
        id: 1,
        name: 'abc'
      };

  const obj2 = {
    id: 2,
    name: 'bcd'
  };

  const data = [obj1, obj2];

  const orderByPipe = new OrderByPipe();

  it('should order by given key asc', () => {
    const result = orderByPipe.transform(data, 'id', 'asc');

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(obj1);
    expect(result[1]).toEqual(obj2);
  });

  it('should order by given key desc', () => {
    const result = orderByPipe.transform(data, 'id', 'desc');

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(obj2);
    expect(result[1]).toEqual(obj1);
  });

  it('should order by another key ask', () => {
    const result = orderByPipe.transform(data, 'name', 'asc');

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(obj1);
    expect(result[1]).toEqual(obj2);
  });

  it('should order by default asc key if it was not given', () => {
    const result = orderByPipe.transform(data, 'id');

    expect(result.length).toBe(2);
    expect(result[0]).toEqual(obj1);
    expect(result[1]).toEqual(obj2);
  });
});
