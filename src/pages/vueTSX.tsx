import { Button } from 'vant';
import { defineComponent, onMounted, reactive } from 'vue'


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
        <Button type="primary" onClick={clickHandler}>+</Button>
      </div>
    )
  }
})