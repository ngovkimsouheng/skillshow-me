import Logo from "../Icon/logo.PNG";
import LogoDark from "../Icon/dark-mode-logo.PNG";

export default function LogoCompoent() {
  return (
    <div>
      {" "}
      <img className="w-30 block dark:hidden" src={LogoDark} alt="" />{" "}
      <img className="w-30 hidden dark:block" src={LogoDark} alt="" />
    </div>
  );
}
