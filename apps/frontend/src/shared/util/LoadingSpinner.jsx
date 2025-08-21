function LoadingSpinner({ small = "false" }) {
  if (small) {
    return (
      <span className="loading loading-spinner loading-sm text-secondary"></span>
    );
  }

  return (
    <div classname="flex items-center justify-center h-screen">
      <span classname="loading loading-spinner text-secondary"></span>
    </div>
  );
}

export default LoadingSpinner;
