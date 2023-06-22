import { Link } from "react-router-dom";
interface Props {
  question: string;
  path: string;
  action: string;
}
const Acct__question = ({ question, path, action }: Props) => {
  return (
    <div className="account__question">
      <span>
        {question}
        <Link to={path}> {action}</Link>
      </span>
    </div>
  );
};

export default Acct__question;
