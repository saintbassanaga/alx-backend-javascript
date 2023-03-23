export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      // eslint-disable-next-line no-console
      console.log('Got a response from the API');
    });
}
