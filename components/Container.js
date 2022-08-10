import classNames from "classnames";

export default function Container({ children, type }) {
  return (
    <div className={type ? "container-"+type : "container"}>{children}</div>
  );
}
