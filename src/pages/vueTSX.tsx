import { defineComponent, onMounted, reactive } from 'vue'
import { NButton, NDatePicker } from 'naive-ui'

// 状态组件需要使用 defineComponent
export default defineComponent({
  name: 'vueTSX',
  setup() {
    const data = reactive({ count: 0 });

    onMounted(() => {
      data.count = 5;
    });

    const clickHandler = () => data.count++

    return () => (
      <div>
        <span style={{ marginRight: '10px' }}>{data.count}</span>
        <NButton onClick={clickHandler}>+</NButton>
        <NDatePicker type="date" />
      </div>
    )
  }
})