import { toast } from "react-toastify";

export default function showErrors(errors) {
  if (errors) {
    errors.map((error) => {
      toast.error(error);
    });
  }
  return;
}
