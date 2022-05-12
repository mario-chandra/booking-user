import Dropdowns from '@/components/Dropdowns';

const SelectInput = ({
  path,
  itemId = 'id',
  itemLabel = '',
  name,
  placeholder,
  label,
  register = () => {},
  setValue,
}) => {
  const r = register(name);

  return (
    <div key={name} className="mt-5">
      <label className="label" for={name}>
        {label}
      </label>
      <Dropdowns
        r={r}
        path={path}
        itemId={itemId}
        itemLabel={itemLabel}
        placeholder={placeholder}
        setValue={setValue}
      />
    </div>
  );
};

export default SelectInput;
