function Alert({ type = "success", message }) {
  const alertType = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  };

  return (
    <div role="alert" className={`alert ${alertType[type]} shadow-lg mb-4`}>
      <span>{message}</span>
    </div>
  );
}

export default Alert;
