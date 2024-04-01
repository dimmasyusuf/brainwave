/* eslint-disable react/prop-types */
import brackets from "../assets/svg/Brackets";

export default function TagLine({ children, className }) {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
}
