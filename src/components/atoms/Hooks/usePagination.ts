import * as React from "react";

const usePagination = (getLimit: number) => {
  const [limit, setLimit] = React.useState<number>(getLimit);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  React.useEffect(() => {
    setEnd(skip + limit);
  }, [limit, skip]);

  return { limit, setLimit, skip, setSkip, end, setEnd };
};

export default usePagination;
