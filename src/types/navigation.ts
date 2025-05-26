import { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {

}

export type RootStackParamList = {
  Login: undefined;
  Dashboard: NavigatorScreenParams<TabParamList>
}
