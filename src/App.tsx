import { RecoilRoot } from 'recoil';
import Router from 'routes/routes';
// TODO
import styles from './App.module.css';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Fest from 'services/nft/Fest';

export default function App() {
  return (
    <>
      {/* <ScrollToTop />
     <GlobalStyles /> */}
      {/* Recoil을 사용하는 component들은 <RecoilRoot>로 감싸야 함 */}
      <RecoilRoot>
        <ScrollToTop />
        <Fest />

        <Router />
      </RecoilRoot>
    </>
  );
}
