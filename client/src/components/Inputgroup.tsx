interface Props {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}
const Inputgroup = ({ id, label, type, placeholder }: Props) => {
  return (
    <div className="input___group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Inputgroup;
