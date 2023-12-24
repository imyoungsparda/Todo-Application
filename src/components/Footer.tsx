function Footer() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "700px",
        borderTop: "1px solid #d1d5db",
      }}
    >
      <p style={{ fontSize: "10px" }}>Built by Ayush Raj</p>
      <p style={{ fontSize: "8px" }}>Copyright &copy; 2023 Ayush Raj</p>
    </div>
  );
}

export default Footer;
