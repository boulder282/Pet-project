import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const Head = () => {
  // const { Header } = Layout;

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Логотип и название */}
      <Space size="middle">
        <Title level={2} style={{ margin: 0, color: "black" }}>
          QPICK
        </Title>
      </Space>

      {/* Правая часть с избранным и корзиной */}
      <Space size="large">
        {/* Избранное */}
        <Badge count={0} size="small" showZero={false}>
          <Button
            type="text"
            icon={<HeartOutlined style={{ fontSize: "20px", color: "#000" }} />}
            size="large"
            href="favorites"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Badge>

        {/* Корзина count = количество добавленных товаров */}
        <Badge count={null} size="small">
          <Button
            type="text"
            icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
            size="large"
            href="cart"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Badge>
      </Space>
    </Header>
  );
};

export default Head;
