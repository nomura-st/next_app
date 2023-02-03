const TableColCheck = (props: { header?: string }) => {
  let header;
  if (props.header) {
    header = <div>{props.header}</div>;
  }
  return (
    <label className="w-full h-full flex flex-col text-center justify-items-center">
      {header}
      <div>
        <input type="checkbox" className="checkbox" />
      </div>
    </label>
  );
};

export default TableColCheck;
