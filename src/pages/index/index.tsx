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
