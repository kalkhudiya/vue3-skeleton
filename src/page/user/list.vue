<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
    <p class="mb-4">
      DataTables is a third party plugin that is used to generate the demo table
      below. For more information about DataTables, please visit the
      <a target="_blank" href="https://datatables.net"
        >official DataTables documentation</a
      >.
    </p>
    <!-- DataTales -->
    <data-table heading="Employees" :data="employeeTable"></data-table>

    <add-employee></add-employee>

    <router-link class="plus-btn-xl" to="/user/add" >
      <plus-icon :width="40" :height="40"></plus-icon>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import addEmployee from "../../components/employee/add.vue";

import dataTable from "../../components/shared/dataTable.vue";
import plusIcon from "../../components/icons/plusIcon.vue";

export default defineComponent({
  setup() {},
  data() {
    return {
      employeeTable: {
        headings: ["name", "type", "email"],
        body: [["as", "sa", "asas"]],
      },
    };
  },
  computed: {
    ...mapGetters({
      name: "getName",
    }),
  },
  components: {
    addEmployee,
    dataTable,
    plusIcon
  },
});
</script>

