//app.js is the root componet example commented out below
import Header from './components/Header'
const App = () => {
  
  return (
    <div className="container">
      <Header />
    </div>
  );
}


export default App;

//JSX has to have one parent element so would need to go into a div or fragment 
// function App() {
//   const name = 'Maisha'
//   const x = true
//   return (
//     <div className="container">
//       <h1>Hello From React </h1>
//       <h2>Hello {name} let's learn React</h2>
//       <p> {x ? 'Yes' : 'No'} </p>

//     </div>
//   );
// }