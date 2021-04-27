<template>
  <v-container>
    <PhotoAdd @addPhoto="addPhoto" v-if="photos.length < 11" />
    <div v-else>You can not add more photos</div>
    <v-row>
      <Photo
        v-for="photo of $store.getters.getAllPhotos"
        v-bind:key="photo.id"
        :photo="photo"
      />
      <!-- @openPhoto="openPhoto" -->
    </v-row>
    <PhotoDialog />
    <!-- :photo="currentPhoto" v-model="dialogVisible"  -->
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo";
import PhotoAdd from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import { mapActions } from "vuex";

export default {
  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false,
  }),
  components: {
    Photo,
    PhotoAdd,
    PhotoDialog,
  },
  mounted() {
    // this.fetchTodo();
    // this.$store.dispatch("fetchPhotos");
    this.fetchPhotos();
  },
  methods: {
    // fetchTodo() {
    //   this.axios
    //     .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
    //     .then((response) => (this.photos = response.data));
    // },
    addPhoto(photo) {
      this.photos.push(photo);
    },
    // openPhoto(photo) {
    //   this.currentPhoto = photo;
    //   this.dialogVisible = true;
    // },
    ...mapActions(["fetchPhotos"])
  },
};
</script>

<style scoped></style>
