import { reactive } from "vue";

export const store = reactive({
  //  Variables
  imageStoreUrl: "http://127.0.0.1:8000/storage/", // Save url from server
  projects: [], // Store projects in array

  loading: true, // Flag to show Apploading
});
