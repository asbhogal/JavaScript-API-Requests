// A FETCH FUNCTION WHICH SENDS A POST REQUEST, CREATING A NEW OBJECT

fetch("https://api.restful-api.dev/objects", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Macbook Pro",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));

// AN ASYNC/AWAIT FUNCTION WHICH RETRIEVES DATA FROM THE API USING AN ASYNC GET REQUEST

async function getData() {
  try {
    let response = await fetch("https://api.restful-api.dev/objects");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

getData();
