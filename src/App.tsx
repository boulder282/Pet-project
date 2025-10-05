import { Layout } from "antd";
import "./App.css";
import Head from "./components/header";
import ContactFooter from "./components/footer";
import { Outlet } from "react-router";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Head />
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <ContactFooter />
      </Footer>
    </Layout>
  );
}

export default App;
