import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react-native';

export type TabParamList = {

}

export type RootStackParamList = {
  Login: undefined;
  Dashboard: NavigatorScreenParams<TabParamList>
}
