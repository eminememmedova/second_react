import React from "react";
import Child from "./components/Child.jsx"

const App = ()=> (
 <>
 <Child/>
 </>
);

export default App;
















// import React, {useState } from "react";
// import Button from "@mui/material/Button";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const incrementCount = setInterval(() => {
//     setCount(count + 1);
//   }, 1000);
//   // useEffect(() => {
    
//   // });

//   return (
//     <>
//       <div>Timer:{count}s</div>
//       <h1>Stop watch...</h1>
//       <Button variant="contained" color="success" onClick={()=>this.incrementCount()}>
//         START
//       </Button>
//       <Button variant="outlined" color="error">
//         STOP
//       </Button>
//       <Button color="secondary">RESET</Button>
//     </>
//   );
// };

// export default App;

// import React, {useRef} from 'react';

// function App() {
// const boxEl = useRef();
// const changeStyle = ()=>{
//   boxEl.current.style.backgroundColor="red";
//   boxEl.current.style.border="1px solid black";
//   boxEl.current.style.borderRadius="50%";

// }

//   return (
//     <>
//       <div ref={boxEl} type="text" style={{backgroundColor:"green",width:100, height:100}}></div>
//       <button onClick={()=>changeStyle()}>changeStyle</button>
//     </>
//   )
// }

// export default App

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>

//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import data from './data'
// function createData(name,surname, age) {
//   return { name,surname, age };
// }

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">surname</TableCell>
//             <TableCell align="right">Age&nbsp;(g)</TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((d) => (
//             <TableRow
//               key={d.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {d.name}
//               </TableCell>

//               <TableCell align="right">{d.surname}</TableCell>
//               <TableCell align="right">{d.age}</TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
