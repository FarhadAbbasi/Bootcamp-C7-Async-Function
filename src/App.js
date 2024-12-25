import logo from './logo.svg';
import './App.css';
import AppPyramid from './AppCallback';
import AppCallback from './AppCallback';
import AppPromise from './AppPromise';
import AppAsyncAwait from './AppAsyncAwait';
import AppTryCatch from './AppTryCatch';

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
