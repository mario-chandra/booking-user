import Dropdowns from '@/components/Dropdowns';

const SelectInput = ({
  data,
  itemId = 'id',
  name,
  placeholder,
  label,
  register = () => {},
}) => {
  const r = register(name);
  const handleSelect = (item) => {
    console.log('asdf', item);
  };
  return (
    <div key={name} className="mt-5">
      <label className="label" for={name}>
        {label}
      </label>
      <Dropdowns data={data} itemId={itemId} placeholder={placeholder} />
    </div>
  );
};

export default SelectInput;
