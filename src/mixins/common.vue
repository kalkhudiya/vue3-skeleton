<script>
export default  {
  name: "commonMixins",
  methods: {
    addBodyCssTags(toggle) {
      if ("id" in toggle) {
        document.getElementsByTagName("body")[0].id = toggle.id;
      }
      if ("className" in toggle) {
        document.getElementsByTagName("body")[0].className = toggle.className;
      }
    },
  },
};
</script>
