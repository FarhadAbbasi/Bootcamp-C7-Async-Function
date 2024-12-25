
function AppAsyncAwait() {
  console.log("Before preparing food")

  function prepareFood(data) {

    let promise = new Promise((resolve, reject) => {  // Promise will handle error, returns something at the end. 

      setTimeout(() => {
        if (data !== 2) {
          console.log("Preparing food ");
          resolve("Food is Ready");
        }
        else {
          reject("Value is not acceptable")
        }
      }, 10);

    });
    return promise;

  }

  function prepareToast(data) {
    let promise = new Promise((resolve, reject) => {
      setTimeout((name) => {
        if (data !== 2) {
          console.log("Preparing Toast, " + name);
          resolve("Toast is ready")
        } else {
          reject("Value not acceptable")
        }
      }, 10, "Farhad");
    });
    return promise;
  }

  function prepareTea() {
    let promise = new Promise((resolve, reject) => {
      console.log("Tea is preparing");
      resolve("Tea is ready now")
    });
    return promise;
  }

  //<<--------------------  "ASYNC, AWAIT" FUNCTION ----------------->> 

  async function startProcess(params) {  // Async will be used in declaration.

    let foodValue = await prepareFood();         // Await will always be used within Async and while calling the function.
    console.log("Food response: ", foodValue);  // This line will not be executed untill "prepareFood" job is finished.
    let toastValue = await prepareToast();
    console.log("Toast response: ", toastValue)
    let teaValue = await prepareTea();
    console.log("Tea response: ", teaValue)
  }
  startProcess();
  //<<--------------------   With "ASYNC-AWAIT",  We don't need to call "Promise > Then" anymore. ----------------->> 



  console.log("After preparing food")


  return (
    <div >
      <h1> Asynch Await Room </h1>
    </div>
  );
}

export default AppAsyncAwait;
