import logo from './logo.svg';
import './App.css';

function AppTryCatch() {
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

  //<<--------------------  "TRY, CATCH" FUNCTION ----------------->> 

  async function startProcess(params) {  // Async will be used in declaration.

    try {                     // This will try executing the function to see if there isn't an error.
      let foodValue = await prepareFood(1);
      console.log("Food response: ", foodValue);
      let toastValue = await prepareToast(2);
      console.log("Toast response: ", toastValue)
      let teaValue = await prepareTea();
      console.log("Tea response: ", teaValue)
    }
    catch (error) {     // And if there's an error, catch will abort the "process" and through the error alert.
      console.log("Error in catch: ", error)
    }
  }

  startProcess();
  //<<----  With "ASYNC-AWAIT & TRY-CATCH",  We have greatly simplified the visibility as compared to the "PromiseS>Then". ----->> 



  console.log("After preparing food")


  return (
    <div >
      <h1> Asynch Await Room </h1>
    </div>
  );
}

export default AppTryCatch;
