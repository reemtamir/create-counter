function Button({ fn }) {
  return (
    <>
      <button className="mt-3" onClick={fn}>
        Create new counter
      </button>
    </>
  );
}
export default Button;
