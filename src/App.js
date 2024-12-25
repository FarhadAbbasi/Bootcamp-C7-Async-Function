import logo from './logo.svg';
import './App.css';
import AppPyramid from './Components/AppCallback';
import AppCallback from './Components/AppCallback';
import AppPromise from './Components/AppPromise';
import AppAsyncAwait from './Components/AppAsyncAwait';
import AppTryCatch from './Components/AppTryCatch';

function App() {
  // console.log("Before preparing food")
  // function greet(name) {
  //   console.log(`Hello, ${name}!`);
  // }
  // setTimeout(greet, 3000, "Alice"); // Outputs "Hello, Alice!" after 3 seconds


  return (
    <div >
      <div style={{ alignItems: "center", backgroundColor: "gray" }}>
        <h1> Hello Home </h1>
      </div>

      {/* <AppCallback/> */}
      {/* <AppPromise/> */}
      {/* <AppAsyncAwait /> */}
      <AppTryCatch />
    </div>
  );
}

export default App;
