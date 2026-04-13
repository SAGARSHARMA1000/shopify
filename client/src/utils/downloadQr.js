export const downloadQr = (qrSrc) => {
  const link = document.createElement("a");
  link.href = qrSrc;
  link.download = "payment-qr.jpeg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};