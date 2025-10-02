import { Row, Col } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";

const ContactFooter = () => {
  return (
    <div
      style={{ background: "#fff", padding: "20px 40px", borderRadius: "16px" }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <h2 style={{ fontWeight: "bold" }}>QPICK</h2>
        </Col>

        <Col>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a href="favorites">Избранное</a>
            <a href="cart">Корзина</a>
            <a href="#">Контакты</a>
          </div>
        </Col>

        <Col>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a href="#">Условия сервиса</a>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <GlobalOutlined />
              <span>Каз</span>
              <span style={{ color: "orange" }}>Рус</span>
              <span>Eng</span>
            </div>
          </div>
        </Col>

        <Col>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#">
              <span>VK</span>
            </a>
            <a href="#">
              <InstagramOutlined />
            </a>
            <a href="#">
              <span>Telegram</span>
            </a>
            <a href="#">
              <span>WhatsApp</span>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactFooter;
