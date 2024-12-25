
function AppPromise() {
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
        if (data !== 2){
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


  //<<--------------------  "PROMISE > THEN" SEQUENCE ----------------->> 

  let Food = prepareFood(0);
  Food.then((foodValue) => {            // This .then requires another callback (Which we will take from "resolve" of promise).
    console.log("Food callback: ", foodValue);
    return prepareToast(2);
  })                                  // Now, it will be calling another ".then", not creating a "nesting of functions".
    .then((toastValue) => {
      console.log("Toast Callback: ", toastValue);
      return prepareTea(2);
    })
    .then((teaValue) => {
      console.log("Tea Callback: ", teaValue);
    })
    .catch((error) => {
      console.log("Error: ", error);
    })
  //<<-------- This code has now been turned into a sequence, instead of nesting. --------->> 


  // prepareFood((value) => {  
  //   console.log("Food value =", value);
  //   prepareToast((value) => {
  //     console.log("Toast value =", value);
  //     prepareTea((value) => {
  //       console.log("Tea value =", value);
  //     });
  //   });
  // });



  console.log("After preparing food")


  return (
    <div >
      <h1> Promise </h1>
    </div>
  );
}

export default AppPromise;
