<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <!-- Header -->
                <app-header></app-header>
                <!-- End of Topbar -->
                <router-view/>
            </div>
            
            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import sidebar from '../../components/sidebar'
import appHeader from "../../components/shared/appHeader.vue";

export default defineComponent({
    setup() {
        
    },
    components: {
        sidebar,
        appHeader
    }
})
</script>
