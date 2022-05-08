import ErrorMessage from '@/components/ErrorMessage';
import classNames from '@/helpers/classNames';

const TextInput = ({
  name,
  inputType = 'text',
  placeholder,
  label,
  register = () => {},
  errors,
}) => {
  const isError = errors && errors[name];

  const r = register(name);

  return (
    <div key={name} className="w-[468px] mt-8">
      <h2 className="label" for={name}>
        {label}
      </h2>

      <input
        className={classNames(isError && 'error-input', 'input')}
        id={name}
        type={inputType}
        placeholder={placeholder}
        // value={input}
        name={r?.name}
        onBlur={r?.onBlur}
        onChange={r?.onChange}
        ref={r?.ref}
      />

      {isError && <ErrorMessage message={errors[name]?.message} />}
    </div>
  );
};

export default TextInput;
