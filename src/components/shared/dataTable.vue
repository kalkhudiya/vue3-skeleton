<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3" v-if="heading">
      <h6 class="m-0 font-weight-bold text-primary">{{ heading }}</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table
          class="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead v-if="data.headings">
            <tr>
              <th v-for="heading of data.headings" v-bind:key="heading">{{heading}}</th>
            </tr>
          </thead>
          <tbody v-if="data.body">
            <tr v-for="row in data.body" v-bind:key="row[0]">
              <td v-for="col in row" v-bind:key="col">
                  {{ col }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  props: {
      heading: {
          type: String,
          default: 'Hello'
      },
      data: {
          type: Object,
          default: () => {}
      }
  }
});
</script>

