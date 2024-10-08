import { useEffect, useState } from "react";
import { Button } from "shared/ui";

export const BugButton = () => {
  const [error, setError] = useState(false);

  const handleThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={handleThrow}>Throw error</Button>;
};
