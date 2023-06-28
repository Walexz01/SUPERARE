import { NavLink } from "react-router-dom";
interface Props {
  path: string;
  label: string;
}
const Auct__link = ({ path, label }: Props) => {
  return (
    <NavLink className="auct__link" to={path}>
      {label}
    </NavLink>
  );
};

export default Auct__link;
