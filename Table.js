import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

const tableContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "100vh",
};

const tableStyle = {
  width: "80%",
  maxWidth: "100%",
};

const DataTable = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div style={{ justifyCentent: "centre" }}>
        <Typography variant="h2">Recommended Places</Typography>
      </div>

      <div style={tableContainerStyle}>
        <TableContainer style={tableStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Week Day</TableCell>
                <TableCell>Places</TableCell>
                <TableCell>Food Items</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((day, index) => (
                <TableRow key={index}>
                  <TableCell>{day.Week_Day}</TableCell>
                  <TableCell>
                    <ul>
                      {day.Places.map((place, i) => (
                        <li key={i}>{place}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      {day.Food_Items.map((food, i) => (
                        <li key={i}>{food}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default DataTable;
