import styles from "./Button.module.css";

const Button = ({ isOutline, icons, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {/* <MdMessage fontSize="24px" /> */}

      {icons}
      {text}
      {/* in case if object destructuring method were not used */}
      {/* {props.icons}
      {props.text} */}
    </button>
  );
};

export default Button;
