export default function createIteratorObject(reportObject) {
  const employees = Object.values(reportObject.allEmployees);
  const iterator = {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < employees.length) {
            return {
              // eslint-disable-next-line no-plusplus
              value: employees[i++],
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
  return iterator;
}
