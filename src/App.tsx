import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import Header from './components/Header';
import TodoList from './pages/TodoList';

function App() {
  const {i18n, t} = useTranslation();

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{lang: i18n.language}}
      >
        <meta name="description" content={t('app.description')} />
      </Helmet>
      <Header />
      <TodoList />
    </>
  );
}

export default App;
