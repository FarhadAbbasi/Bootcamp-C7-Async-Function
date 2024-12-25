import logo from './logo.svg';
import './App.css';

function AppCallback() {
  console.log("Before preparing food")
  // function greet(name) {
  //   console.log(`Hello, ${name}!`);
  // }
  // setTimeout(greet, 3000, "Alice"); // Outputs "Hello, Alice!" after 3 seconds

  function prepareFood(callback) {
    setTimeout(() => { // We are actually telling "Cheff" to keep preparing food & info me while I run next funcs.
      console.log("Preparing food ");
      callback("Food is Ready");
    }, 10); // 20 millisecond is delay time (func will be exec after this time delay).
  }

  function prepareToast(callback) { // We want toast to be prepared once Food is Ready.
    setTimeout((name) => {
      console.log("Preparing Toast, " + name);
      callback("Toast is ready")
    }, 10, "Farhad"); // Here we can pass "arguments(props)" to "settimeout" func as well. 
  }

  function prepareTea(callback) {
    console.log("Tea is preparing"); // Tea won't wait for any delay and will be ready right after Toast.
    console.log("Tea is ready now")
  }

  prepareFood( (value)=> {  // THis is called "CallBack Hell". If there's an error at any instance, We are doomed :D
    console.log("Food value =", value);
    prepareToast( (value)=> {
      console.log("Toast value =", value);
      prepareTea(  (value)=> {
        console.log("Tea value =", value);
      });
    });
  });

  // prepareFood(function (value) {
  //   console.log("Food value =", value);
  //   prepareToast(function (value) {
  //     console.log("Toast value =", value);
  //     prepareTea(  function (value) {
  //       console.log("Tea value =", value);
  //     });
  //   });
  // });

// <<--------------------------------   Initial Callback Code ------------------------------------>>

    // function prepareFood() {
  //   setTimeout(() => { // We are actually telling "Cheff" to keep preparing food & info me while I run next funcs.
  //     console.log("Preparing food ");
  //     foodcallback("Food is Ready");
  //   }, 10); // 20 millisecond is delay time (func will be exec after this time delay).
  // }
  // prepareFood();

  // function prepareToast() { // We want toast to be prepared once Food is Ready.
  //   setTimeout((name) => {
  //     console.log("Preparing Toast, " + name);
  //     toastcallback("Toast is ready")
  //   }, 10, "Farhad" ); // Here we can pass "arguments(props)" to "settimeout" func as well. 
  // }

  // function prepareTea() {
  //   console.log("Tea is preparing") ; // Tea won't wait for any delay and will be ready right after Toast.
  //   teacallback("Tea is ready")
  // }

  // function foodcallback(value) {
  //   console.log("Food value =", value);
  //   prepareToast();
  // }
  // function toastcallback(value) {
  //   console.log("Toast value =", value);
  //   prepareTea();
  // }
  // function teacallback(value) {
  //   console.log("Tea value =", value);
  //   // prepareTea();
  // }

  // console.log("After preparing food")

// <<--------------------------------   Initial Callback Code Ends ------------------------------------>>




  console.log("After preparing food")


  return (
    <div >
      <h1> CallBacks  </h1>
    </div>
  );
}

export default AppCallback;
