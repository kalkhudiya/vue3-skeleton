<template>
  <div>
    <vu-popup>
      <p>P tag</p>
    </vu-popup>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import vuPopup from "../shared/vu-popup";

export default defineComponent({
  components: {
    vuPopup,
  },
});
</script>
