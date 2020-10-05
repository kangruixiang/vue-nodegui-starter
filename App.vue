<template>
  <vn-view>
    <Preference />
    <Test />
    <vn-view id="counter" :styleSheet="counterStyle">
      <vn-text>Counter: {{ count }}</vn-text>
      <vn-button @clicked="inc">Inc</vn-button>
    </vn-view>
  </vn-view>
</template>

<script>
import Test from "./Test.vue";
import Preference from "./Preference.vue";
import { ref } from "@nodegui/vue-nodegui";

export default {
  components: { Test, Preference },
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
      console.log(count);
    };

    return {
      inc,
      count,
      counterStyle: `
        #counter {
          flex-direction: row;
          align-items: 'center';
          justify-content: 'center';
        }
      `,
    };
  },
};
</script>
