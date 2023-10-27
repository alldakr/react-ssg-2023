import { node } from 'prop-types';
import Stack from '../components/Stack';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SideBar from './SideBar';
import useHTMLValidate from '@/hooks/useHTMLValidate';

export function RootLayout({ sideBar }) {
  useHTMLValidate();

  return (
    <>
      <Header />
      <Stack>
        {sideBar}
        <Main />
      </Stack>
      <Footer />
    </>
  );
}

RootLayout.propTypes = {
  sideBar: node,
};

export function RootLayoutWithSideBar() {
  return <RootLayout sideBar={<SideBar />} />;
}
