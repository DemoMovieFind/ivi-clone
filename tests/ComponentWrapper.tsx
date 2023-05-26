import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { messages } from '../src/i18n/messages';
import { LOCALES } from '../src/i18n/locales';
import { IntlProvider } from 'react-intl';
import { GoogleOAuthProvider } from '@react-oauth/google';

const ComponentWrapper = (component:JSX.Element) => {
  return render (
      <Provider store={store}>
        <GoogleOAuthProvider clientId="64086974939-oijgmdetcv1c9a6envjks8qoov02adgp.apps.googleusercontent.com">
          <MemoryRouter>
            <IntlProvider
              messages={messages["ru-RU"]}
              locale={"ru-RU"}
              defaultLocale={LOCALES.RUSSIAN}
            >
              {component}
            </IntlProvider>
          </MemoryRouter>
        </GoogleOAuthProvider>
      </Provider>
    );
}

export default ComponentWrapper;