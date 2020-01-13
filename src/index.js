console.log("Hellow worlrd");



const getResource = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ` + `,received ${res.status}`);
  }
  const body = await res.json();
  return body;
};

getResource("https://swapi.co/api/people/1222/")
  .then(body => console.log(body))
  .catch(error => {
    console.error("Could not Fetch", error);
  });


