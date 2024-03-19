import classes from "./footer.module.css";

export default function Footer() {
  return (
    <h5 className={classes.footer}>Developed by
      <strong>
        <a href='https://www.linkedin.com/in/feduarte-dev/' target='_blank'> Felipe Duarte
        </a>
      </strong>
    </h5>
  );
}
