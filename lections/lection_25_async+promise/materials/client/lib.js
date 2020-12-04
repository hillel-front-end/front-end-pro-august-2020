
function ajax({ url, method, data}) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
      
    xhttp.onload = () => {
      const response =
        (typeof xhttp.response === "string" && xhttp.status == 200)
          ? JSON.parse(xhttp.response)
          : xhttp.response;

          xhttp.status == 200?  resolve(response) : reject(response)

    };
  
    xhttp.onerror = () => {
      reject({
        error: 'error'
      });
    };

    xhttp.open(method, url);
      
    method.toLowerCase() === "post"
      ? xhttp.send(data)
      : xhttp.send();
  });
}