<template>
  <vn-view id="test" :styleSheet="viewStyle">
    <vn-button @clicked="anki">Test Button</vn-button>
  </vn-view>
</template>

<script>
import ankiPath from "./assets/test.js";

export default {
  setup() {
    const anki = () => {
      console.log(ankiPath);
    };
    return {
      anki,
      viewStyle: `
                #test {
                    background-color: white;
                    padding: 20px;
                }

                #heading {
                    color: black;
                    font-size: 24px;
                    qproperty-alignment: AlignCenter;
                }

                #text {
                    color: black;
                    font-size: 18px;
                    qproperty-alignment: AlignCenter;
                }
            `,
    };
  },
};
</script>