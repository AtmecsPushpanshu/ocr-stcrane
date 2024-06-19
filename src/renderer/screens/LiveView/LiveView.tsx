import PageHeader from '../../components/common/PageHeader';
import { WithPadding } from '../../components/Styles';
import LiveViewForm from './LiveViewForm';

function LiveView() {
  return (
    <WithPadding>
      <PageHeader title="Live View" />
      <LiveViewForm />
    </WithPadding>
  );
}

export default LiveView;
