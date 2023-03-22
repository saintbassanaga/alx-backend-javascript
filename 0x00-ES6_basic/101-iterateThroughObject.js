export default function iterateThroughObject(reportWithIterator) {
  const employees = Object.values(reportWithIterator.allEmployees);
  return employees.join(' | ');
}
