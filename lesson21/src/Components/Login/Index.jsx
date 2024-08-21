import React from "react";
import { Container, Control, Div, Select, Sidebar, Title } from "./Syled";
import img from "../../assets/Ellipse.png";
function Index() {
  return (
    <div>
      <Container>
        <Sidebar>
          <Title>Webbrain.crm</Title>
          <hr color="#253E5F" />
          <Control>
            <img src={img} alt="" />
            <div className="list">
              <Title.list>
                Turgunov Dostonbek <br />
                <span className="description">t.dostonbek@gmail.com</span>
              </Title.list>
            </div>
          </Control>

          <Div>
            <div className="list">
              <i></i>
              <Title.list>Anlitika</Title.list>
            </div>
            <div className="list">
              <i></i>
              <Title.list>Buyurtma</Title.list>
            </div>
            <div className="list">
              <i></i>
              <Title.list>Moliya</Title.list>
            </div>
            <div className="list">
              <i></i>
              <Title.list>Talaba</Title.list>
            </div>
            <div className="list">
              <i></i>
              <Title.list>Guruhlar</Title.list>
            </div>
            <div className="list">
              <i></i>
              <Title.list>Kurslar</Title.list>
            </div>
            <div className="list">
              <i></i>
              <Title.list>HR</Title.list>
            </div>
          </Div>
          <hr color="#253E5F" />

          <Div>
            <div className="list">
              <i></i>
              <Title.list>Sozlamalar</Title.list>
            </div>

            <div className="list_bottom">
              <i></i>
              <Title.list>Chiqish</Title.list>
            </div>
          </Div>
        </Sidebar>
      </Container>
    </div>
  );
}

export default Index;
