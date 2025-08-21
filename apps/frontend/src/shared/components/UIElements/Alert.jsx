function Alert({ type = success, message }) {
  return (
    <div role="alert" className={`alert alert-${type} shadow-lg mb-4`}>
      <span>{message}</span>
    </div>
  );
}

export default Alert;
