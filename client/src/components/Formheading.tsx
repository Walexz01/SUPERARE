interface Props {
  heading: string;
  intro: string;
}
const Formheading = ({ heading, intro }: Props) => {
  return (
    <div className="form__heading">
      <h2>{heading}</h2>
      <p>{intro}</p>
    </div>
  );
};

export default Formheading;
