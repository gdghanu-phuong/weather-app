import { useEffect, useState } from "react";

export function useError(error: unknown, msg: string) {
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (error) {
      setErrorMsg(msg);
    } else {
      setErrorMsg(""); // Optional: clear message when no error
    }
  }, [error, msg]);

  return errorMsg;
}
