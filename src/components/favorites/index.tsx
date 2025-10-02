import React from "react";
import { Card, Button, Typography, Space, Empty } from "antd";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Favorites = () => {
  return (
    <Card
      style={{
        maxWidth: 500,
        margin: "50px auto",
        textAlign: "center",
        padding: "40px 24px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        border: "none",
        borderRadius: 12,
      }}
    >
      {/* Иконка */}
      <Empty
        image={
          <div
            style={{
              fontSize: 64,
              color: "#ff4d4f",
              marginBottom: 16,
            }}
          >
            ❤️
          </div>
        }
        description={
          <Space direction="vertical" size="large">
            <div>
              <Title
                level={4}
                style={{ margin: "0 0 8px 0", color: "#262626" }}
              >
                В избранном пусто
              </Title>
              <Text type="secondary" style={{ fontSize: "16px" }}>
                Но это никогда не поздно исправить :)
              </Text>
            </div>

            {/* Кнопка перехода в каталог */}
            <Button
              type="primary"
              size="large"
              icon={<ShoppingOutlined />}
              style={{
                height: 48,
                padding: "0 32px",
                fontSize: "16px",
                borderRadius: 8,
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
              }}
            >
              В каталог товаров
            </Button>
          </Space>
        }
      />
    </Card>
  );
};

export default Favorites;
