import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `TJV || ${title}`;
  }, [title]);
};

export default useTitle;
