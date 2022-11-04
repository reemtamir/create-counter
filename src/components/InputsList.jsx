function InputsList({
  setMinValue,
  setMaxValue,
  setInitialValue,
  setStepsValue,
}) {
  return (
    <>
      <div className="row w-50 m-auto">
        <label htmlFor="min">Min</label>
        <input
          onInput={(e) => {
            setMinValue(e.target.value);
          }}
          type="number"
          id="min"
        />
        <label htmlFor="max">Max</label>
        <input
          onInput={(e) => {
            setMaxValue(e.target.value);
          }}
          type="number"
          id="max"
        />
        <label htmlFor="initial">Initial</label>
        <input
          onInput={(e) => {
            setInitialValue(e.target.value);
          }}
          type="number"
          id="initial"
        />
        <label htmlFor="steps">Steps</label>
        <input
          onInput={(e) => {
            setStepsValue(e.target.value);
          }}
          type="number"
          id="steps"
        />
      </div>
    </>
  );
}
export default InputsList;
