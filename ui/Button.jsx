import Link from "next/link";

function ButtonAction(props) {
  return (
    <Link href={props.goToPage ? props.goToPage : ""}>
      <button
        type="submit"
        className={`btn btn-${props.theme} btn-active`}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </Link>
  );
}

export default ButtonAction;
