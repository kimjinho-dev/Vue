<template>
  <div class="border">
    <h1>이제 이 페이지는 제껍니다</h1>
    <MyChild
      static-props="부모에서 자식으로 갑니다"
      :my-props="dynamicProps"
      @meow-to-host="hostGetMeow"
      @input-to-host="hostGetInput"
    />
  </div>
  <!-- 템플릿은 하나의 요소만, 비워진것도 X -->
</template>

<script>
import MyChild from "@/components/MyChild";

export default {
  name: "MyComponent",
  data: function () {
    return {
      dynamicProps: "It's in data",
    };
  },
  components: {
    MyChild,
  },
  methods: {
    hostGetMeow: function (catSay) {
      console.log(`고양이말 번역기:${catSay}`);
    },
    hostGetInput: function (inputs) {
      console.log(inputs);
    },
  },
};
</script>

<style>
.border {
  border: solid pink;
}
</style>