import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './index.scss'

/**
 * 界面-滚动
 * @returns 
 */
const Index = () => {
  const _pageScrollTo = (top) => () => {
    Taro.pageScrollTo({
      scrollTop: Number(Taro.pxTransform(top * 2)),
    })
  }
  return (
    <View className="view-content">
      <View className="view-list">
        <View className="view-list-item item1">
          <Text className="view-list-item-text">高度 400</Text>
          <Button
            className="view-list-item-btn"
            onClick={_pageScrollTo(400)}
          >Taro.pageScrollTo({`{scrollTop: 400}`})</Button>
        </View>
        <View className="view-list-item item2">
          <Text className="view-list-item-text">高度 400</Text>
          <Button
            className="view-list-item-btn"
            onClick={_pageScrollTo(800)}
          >Taro.pageScrollTo({`{scrollTop: 800}`})</Button>
        </View>
        <View className="view-list-item item3">
          <Text className="view-list-item-text">高度 400</Text>
          <Button
            className="view-list-item-btn"
            onClick={_pageScrollTo(1200)}
          >Taro.pageScrollTo({`{scrollTop: 1200}`})</Button>
        </View>
        <View className="view-list-item item4">
          <Text className="view-list-item-text">高度 400</Text>
          <Button
            className="view-list-item-btn"
            onClick={_pageScrollTo(0)}
          >Taro.pageScrollTo({`{scrollTop: 0}`})</Button>
        </View>
      </View>
    </View>
  )
}

export default Index;
