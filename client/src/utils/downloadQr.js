export const downloadQR = (qrSrc) => {
  const link = document.createElement("a");
  link.href = qrSrc;
  link.download = "payment-qr.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};