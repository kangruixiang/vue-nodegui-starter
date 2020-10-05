<template>
  <vn-view id="root" :styleSheet="viewStyle">
      <vn-view id="folder">
<vn-line-edit placeholderText="Type message..." />
    <vn-button @clicked="anki">Test Button</vn-button>
      </vn-view>
  
  </vn-view>
</template>

<script>

export default {
  setup() {

    return {
      viewStyle: `
                #root {
                    flex-direction: row;
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