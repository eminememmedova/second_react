import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './data'
function createData(name,surname, age) {
  return { name,surname, age };
}


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">surname</TableCell>
            <TableCell align="right">Age&nbsp;(g)</TableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow
              key={d.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {d.name}
              </TableCell>
        
              <TableCell align="right">{d.surname}</TableCell>
              <TableCell align="right">{d.age}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}