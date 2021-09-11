<template>
  <div
    ref="popupRef"
    class="modal"
    :class="{ 'show d-block': showPopup }"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ heading }}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="close()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button
            @click="close()"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal-backdrop fade"
    :class="{ show: showPopup, 'd-none': !showPopup }"
  ></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "vu-pouup",
  props: {
    heading: {
      type: String,
      default: "Heading Title",
    },
    templateHtml: {
      type: String,
      default: "Hello",
    },
  },
  data() {
    return {
      showPopup: true,
    };
  },
  methods: {
    close() {
      this.showPopup = false;
    },
    open() {
      this.showPopup = true;
    },
  },
});
</script>


