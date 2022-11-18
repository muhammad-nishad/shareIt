
import "./style.scss";
import { ErrorMessage, useField } from "formik";
import {useMediaQuery} from 'react-responsive';


export default function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  const desktopView = useMediaQuery({
    query:"(min-width:850px)"
  })
  return (
    <div className="input_wrap">
      <div className="error_text">
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>
      <input
      className={meta.touched && meta.error && "input_error_border"}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  );
}



