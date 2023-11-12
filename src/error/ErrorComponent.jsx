function ErrorComponent(props) {
  const { error } = props;
  console.log(error);
  return (
    <main className="error">
      <div className="status-bar card error">
        <span>{error}</span>
      </div>
    </main>
  );
}

export default ErrorComponent;
