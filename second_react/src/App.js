
import "./App.css";
// import Navbar from "./components/Navbar";
// import Welcome from "./components/Welcome";
// import Footer from "./components/Footer";
import Form from "./components/Form";
import Box from "./components/Box";


function App() {

return(
  <div>
    <Form/>
    <Box/>
  </div>
)
}

export default App


// function App() {
//   let USERS = [
//     {
//       id: 1,
//       name: "Emine",
//       age: 20,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbJ6q6nCvC-F8ctwjE8F_gh176HK1p-EcKg&usqp=CAU",
//       hobbies: ["drawing", "music"],
//     },
//     {
//       id: 2,
//       name: "Hello",
//       age: 22,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU",
//       hobbies: ["football", "music"],
//     },
//   ];
//   return (
//     <>
//       <Navbar />
//       {USERS.map((user) => {
//         return (
//           <Welcome
//             key={user.id}
//             name={user.name}
//             age={user.age}
//             img={user.img}
//           />
//         );
//       })}
//       <Footer />
//     </>
//   );
// }

// export default App;

// import './App.css';

// const App =()=>{
//   const[color,setColor] =useState("");
//   function blue() {
//       setColor("blue");
//   }
//   function violet() {
//       setColor("violet");

//   }

//   return (
//     <>
//      <div style = {{height:200,width:200, background:color}}></div>
//      <button onClick={()=>blue()}>blue</button>
//      <button onClick={()=>violet()}>violet</button>
//     </>

//   );
// }

// export default App;
