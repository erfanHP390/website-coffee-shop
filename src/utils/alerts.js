import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const toastSuccess = (
  text,
  position,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  draggable,
  progress,
  theme
) => {
  toast.success(`${text}`, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });
};

const toastError = (
  text,
  position,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  draggable,
  progress,
  theme
) => {
  toast.error(`${text}`, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
  });
};

const swalAlert = (title, icon, buttons) => {
  swal({
    title,
    icon,
    buttons,
  });
};

export { toastSuccess, toastError, swalAlert };
