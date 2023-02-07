import React, { useState } from "react";
import QRCode from "qrcode.react";

const QrScan = () => {
  const [ticketInfo, setTicketInfo] = useState("Your ticket information");
  return (
    <>
      <div>
        <QRCode value={ticketInfo} size={256} />
      </div>
    </>
  );
};

export default QrScan;
