import { useRouter } from "next/router";
import { useEffect } from "react";

const Connectors = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("https://portable.retool.com/embedded/public/d0cfef8a-50d9-401d-b77c-c6463809e9d7");
  });
  return null;
};

export default Connectors;
