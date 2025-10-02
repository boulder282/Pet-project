import { Button, Flex, Layout, Typography } from "antd";
import "./App.css";
import { useGetAllPostsQuery } from "./store/features/api/postApi";
import { decrement, increment } from "./store/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Head from "./components/header";
import { Outlet } from "react-router";

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
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
