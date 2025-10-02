import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, Typography } from "antd";
import React from "react";

const Head = () => {
  const { Header } = Layout;

  return (
    <Header>
      <Flex align="center" justify="space-between">
        <Typography>LOGO</Typography>
        <Flex>
          <Button icon={<HeartOutlined />} />
          <Button icon={<ShoppingCartOutlined />} />
        </Flex>
      </Flex>
    </Header>
  );
};

export default Head;
