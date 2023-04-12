import './MainPage.scss';
import { FormattedMessage } from 'react-intl';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>
        <FormattedMessage
          id="header"
        />
      </h1>
    </div>
  );
}

export default MainPage;
