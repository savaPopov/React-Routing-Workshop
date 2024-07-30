export default async function requester(method, url, data) {
  const options = {}

  if (method != 'GET') {
    options.method = method
  }

  if (data) {
    options.headers = {
      "Content-Type": 'application/json',
    }

    options.body = JSON.stringify(data)
  }


  const response = await fetch(url, options)

  const result = await response.json()

  if (!response.ok){
    console.log(result)
    throw result
  }

  return result
}

function get(url) {
  return requester('GET', url)
}
function post(url, data) {
  return requester('POST', url, data)
}
function put(url, data) {
  return requester('PUT', url, data)
}
function del(url) {
  return requester('DELETE', url)
}

export const api = {
  get,
  post,
  put,
  del
}