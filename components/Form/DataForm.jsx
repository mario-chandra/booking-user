import * as Form from './components';

const DataForm = ({
  forms = [],
  register,
  control,
  errors,
  setValue,
  getValues,
}) => {
  return (
    <>
      {forms.map((form) => {
        const Comp = Form[form.type];
        return (
          <Comp
            key={form.name}
            register={register}
            errors={errors}
            control={control}
            setValue={setValue}
            getValues={getValues}
            {...form}
          />
        );
      })}
    </>
  );
};

export default DataForm;
