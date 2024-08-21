import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  /* border: 1px solid red; */
  /* height: 100vh; */
`;

export const Sidebar = styled.div`
  width: 280px;
  height: 860px;
  border: 1px solid black;
  background-color: #162539;
  margin: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  color: #1890ff;
  padding: 16px 24px;
`;
Title.Description = styled(Title)`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #929faf;
`;

export const Div = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin: 10px 5px;
  .list {
    width: 100%;
  }
  .list .description {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #929faf;
  }
  .list_bottom {
    margin-top: 190px;
  }
  .list_bottom:hover {
    width: 100%;
    background: #253e5f;
    cursor: pointer;
  }
  .list:hover {
    background: #253e5f;
    cursor: pointer;
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  padding: 10px 0px;
  .list .description {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: #929faf;
  }
  &:hover {
    background: #253e5f;
    cursor: pointer;
    color: #1890ff;
  }
`;

Title.list = styled(Title)`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #fff;
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`;

export const Select = styled.select`
  width: 280px;
  height: 44px;
  opacity: 0px;
`;
