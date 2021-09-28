# ScrollView 存在 children 错乱的问题

当 ScrollView children 是一个由 View 包裹的组件数组，在同时更新组件数组和 scrollLeft 会存在子数组内部排序混乱的问题。


![h5](https://raw.githubusercontent.com/taroify/taro339-maprender/main/images/render.png)

代码如下：

```tsx
import { Button, ScrollView, View } from '@tarojs/components'
import { useEffect, useState } from 'react'

export default function Index() {
  const [index, setIndex] = useState(0)
  const [nodes, setNodes] = useState([1])
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    if (index === 1) {
      setScrollLeft(1)
    }
  }, [index])

  return (
    <View className='index'>
      <Button onClick={() => {
        setNodes([1, 2])
        setIndex(1)
      }}
      >
        改变
      </Button>
      <ScrollView
        scrollX
        scrollWithAnimation
        scrollLeft={scrollLeft}
      >
        <View>
          {
            //
            nodes.map(node => <View key={node} className={`node-${node}`}>{node}</View>)
          }
        </View>
      </ScrollView>
    </View>
  )
}
```
nodes 的顺序是 1,2 但是当改变 scrollLeft 值以后出现顺序错乱为 2,1。

