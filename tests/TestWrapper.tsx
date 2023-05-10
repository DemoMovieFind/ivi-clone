import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { messages } from '../src/i18n/messages';
import { LOCALES } from '../src/i18n/locales';
import { IntlProvider } from 'react-intl';

const TestWrapper = (testedPage:JSX.Element) => {
  return render (
      <Provider store={store}>
        <MemoryRouter>
          <IntlProvider
            messages={messages["ru-RU"]}
            locale={"ru-RU"}
            defaultLocale={LOCALES.RUSSIAN}
          >
            {testedPage}
          </IntlProvider>
        </MemoryRouter>
      </Provider>
    );
}

export default TestWrapper;