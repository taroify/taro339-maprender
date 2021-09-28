import { Button, ScrollView, View } from '@tarojs/components'
import { useEffect, useState } from 'react'

interface NodeProps {
  index?: number
}

function Node(props: NodeProps) {
  const { index } = props
  return <View className={`node-${index}`}>{index}</View>
}

interface NodeWrapperProps {
  index: number
  nodes: number[]
}

function NodeWrapper(props: NodeWrapperProps) {
  const { index, nodes } = props
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    if (index === 1) {
      setScrollLeft(1)
    }
  }, [index])

  return (
    <ScrollView
      scrollX
      scrollWithAnimation
      scrollLeft={scrollLeft}
    >
      <View>
        {
          //
          nodes.map(node => <Node key={node} index={node} />)
        }
      </View>
    </ScrollView>
  )
}

export default function Index() {
  const [index, setIndex] = useState(0)
  const [nodes, setNodes] = useState([1])

  return (
    <View className='index'>
      <Button onClick={() => {
        setNodes([1, 2])
        setIndex(1)
      }}
      >
        改变
      </Button>
      <NodeWrapper index={index} nodes={nodes} />
    </View>
  )
}
