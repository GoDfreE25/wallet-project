import { AuthorizeLayoutWrapper } from 'components/authorized-layout/authorized-layout';
import './App.scss';
import { ConfigProvider } from 'antd';
import { themeConfig } from 'styles/theme';

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <AuthorizeLayoutWrapper />
    </ConfigProvider>
  );
}

export default App;
