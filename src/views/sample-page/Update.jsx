import FormUpdateDialog from '@/components/forms/FormUpdateDialog';
import { SubCard } from '@components';

const Update = (props) => {
  const { visibled, setVisibled, setParams } = props;

  return (
    <FormUpdateDialog visibled={visibled} setVisibled={setVisibled} setParams={setParams}>
      <SubCard></SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
