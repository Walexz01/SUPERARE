interface Props {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Inputgroup = ({
  id,
  label,
  type,
  placeholder,
  value,
  setValue,
}: Props) => {
  return (
    <div className="input___group">
      <label htmlFor={id}>{label}</label>
      <input
        required
        onChange={(e) => setValue(e)}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputgroup;
