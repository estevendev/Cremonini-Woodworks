import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showError = (message) => {
  toast.error(message, {
    position: 'top-center'
  });
};

export const showSuccess = (message) => {
  toast.success(message, {
    position: 'top-center'
  });
};
