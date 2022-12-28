import React from 'react'
import Loading from "./Loading";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { axiosInstance } from "../../api/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

function ProductTable({ data, loading, error, getData }) {
  function createData(
    id,
    name,
    unitPrice,
    unitsInStock
  ) {
    return { id, name, unitPrice, unitsInStock };
  }

  const rows = data.map((d) => createData(
    d.id,
    d.name,
    d.unitPrice,
    d.unitsInStock
  ));

  const notify = () => {
    toast.success("Supplier deleted from API successfully!", {
      duration: 1800,
      position: "bottom-left",
      icon: "?",
      theme: {
        primary: "green",
        secondary: "black",
      },
    });
  };

  const handleDelete = async (id) => {
    await axiosInstance.delete(`products/${id}`);

    notify();
    getData();
  };

  return (
    <div style={{ padding: "50px"}}>
      <TableContainer component={Paper}>
        {loading && <Loading />}
        {error && "Error"}

        <Toaster />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Product's Name</TableCell>
              <TableCell align="left">Product's Price</TableCell>
              <TableCell align="left">Product in Stock</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .sort((a, b) => a.id - b.id)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.unitPrice}</TableCell>
                  <TableCell align="left">{row.unitsInStock}</TableCell>
                  <TableCell align="left">
                    {" "}
                    <Button
                      onClick={(id) => handleDelete(row.id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductTable;