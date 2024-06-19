import PageHeader from '../../components/common/PageHeader';
import { WithPadding } from '../../components/Styles';
import LiveViewForm from './LiveViewForm';

function LiveView() {
  return (
    <WithPadding sx={{paddingRight:0}}>
      <PageHeader title="Live View" />
      <LiveViewForm />
    </WithPadding>
  );
}

export default LiveView;
