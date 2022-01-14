/* the function receives data with the following properties */
/* api:api route,
  method:post/get 
  details: data object
  direct:file to redirect to if response is succesful 
  - for now we are not redirecting*/

const sendDataHandler = async (data) => {
  const contents = data.details;
  const response = await fetch(data.api, {
    method: data.method,
    body: JSON.stringify({ contents }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    try {
      const data = await response; /* go to courses index */
      /* param.replace("/courses"); */
    } catch (error) {
      /* show errors using state */
      console.log("Error happened here!");
      console.error(error);
    }
    if (!response.ok) {
      throw new Error(data.message || "something went wrong");
    }
    if (response.ok) {
      console.log("all is ok");
    }
  });
};

export default sendDataHandler;
