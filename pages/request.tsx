import { useRouter } from "next/router";
import { useEffect } from "react";

const Request = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("https://portable.zendesk.com/hc/en-us/requests/new?ticket_form_id=6251954019867");
  });
  return null;
};

export default Request;
