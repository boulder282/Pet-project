import { Button, Flex, Layout, Typography } from "antd";
import "./App.css";
import { useGetAllPostsQuery } from "./store/features/api/postApi";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import Head from "./components/header";
import { Outlet } from "react-router";
import ContactFooter from "./components/footer";

function App() {
  // const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllPostsQuery("", {});
  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>{error.message}</div>;
  //теперь я тут

  const { Content, Footer } = Layout;

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
