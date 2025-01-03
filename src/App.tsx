import { AuthorizeLayoutWrapper } from 'components/authorized-layout/authorized-layout';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { ConfigProvider } from 'antd';
import { themeConfig } from 'styles/theme';
import { WalletRoutes } from 'routes/wallet.routes';

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={themeConfig}>
        <AuthorizeLayoutWrapper>
          <WalletRoutes />
        </AuthorizeLayoutWrapper>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
