import React from 'react';
import {View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Wallpaper, Text, Screen, Button} from '../../../library/components';
import { onRemoveToken } from '../../../store/app_redux/action';
export const Main = (props: any) => {
  const dispatch = useDispatch()
  return (
    <View style={{flex:1}}>
      <Wallpaper />
      <Screen
        draw={true}
        statusColor={'transparent'}
        isScroll={true}
        backgroundColor={'transparent'}>
        <Text onPress={()=>{dispatch(onRemoveToken())}} style={{color: 'blue'}}>Logout</Text>
      </Screen>
    </View>
  );
};