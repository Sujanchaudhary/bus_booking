import { Box, Typography } from "@mui/material";
import React from "react";
import QrScan from "./QrScan";

const PrintTicket = () => {
  return (
    <Box sx={{ width: "80%", margin: "0 auto", pt: 10 }}>
      <Box>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "800", textAlign: "center" }}
        >
          Bus Search Ticket
        </Typography>
      </Box>
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>Booked by</td>
            <td>:</td>
            <td>Sujan Chaudary</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>Seat(s)</td>
            <td>:</td>
            <td>3</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>
              Booked Seat(s)
            </td>
            <td>:</td>
            <td>A3, A4, A5</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>
              Per Seat Price(s)
            </td>
            <td>:</td>
            <td>Rs: 1000</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>Amount(s)</td>
            <td>:</td>
            <td>Rs: 3000</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>Payment(s)</td>
            <td>:</td>
            <td>COD</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>
              Vehicle Number(s)
            </td>
            <td>:</td>
            <td>Ko-20, Pa-4040</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>
              Driver(s) Phone Number
            </td>
            <td>:</td>
            <td>980000000</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>Route(s)</td>
            <td>:</td>
            <td>itahari-kathmandu</td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", padding: "15px" }}>Qr Code</td>
            <td>:</td>
            <td style={{ textAlign: "left", padding: "15px" }}>
              <QrScan />
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default PrintTicket;
