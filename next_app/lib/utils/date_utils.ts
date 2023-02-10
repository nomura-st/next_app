export function parse(dateStr: string | null) {
  if (dateStr == null) {
    return null;
  }
  if (dateStr.match(/^[\d]{8}$/g)) {
    return new Date(
      parseInt(dateStr.substring(0, 4)),
      parseInt(dateStr.substring(4, 6)) - 1,
      parseInt(dateStr.substring(6, 8))
    );
  }

  return null;
}

export const incrementAsync = (amount: string) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(parse(amount));
    }, 1000);
  };
};
