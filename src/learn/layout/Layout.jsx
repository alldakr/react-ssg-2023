import { node } from 'prop-types';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Stack from '../components/Stack';

export function RootLayout({ sideBar }) {
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
