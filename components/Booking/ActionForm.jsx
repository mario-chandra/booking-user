import { Button } from '../Buttons';
import Content from '../Container/Content';

const ActionForm = ({
  title,
  form,
  actionName,
  onActionSubmit,
  submitDisabled,
}) => {
  return (
    <Content title={title}>
      <div className="my-11">{form}</div>
      <Button
        title={actionName}
        isDisabled={submitDisabled}
        onClick={onActionSubmit}
      />
    </Content>
  );
};
export default ActionForm;
