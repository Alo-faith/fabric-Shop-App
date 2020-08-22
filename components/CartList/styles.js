import styled from "styled-components/native";
import { Icon, Button } from "native-base";

export const TotalPrice = styled.Text`
  color: red;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
export const TrashIcon = styled(Icon)`
  color: red;
`;

export const CheckButton = styled(Button)`
  align-self: stretch;
  align-items: center;
  padding: 10px;
  background-color: grey;
  margin-top: 30px;
  text-align: center;
`;
export const CheckButtonText = styled.Text`
  text-align: center;
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
