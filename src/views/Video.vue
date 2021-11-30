<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="white--text text-h4">
        {{ id }}
      </v-col>
      <v-col
        v-for="src in srcs"
        :key="src"
        @click="selectTarget(src)"
        md="2"
        cols="4"
      >
        <v-card
          :class="{
            'white--text': true,
            'blue--text': target.split('?')[0].split('/').pop() === src,
            selectedCard: target.split('?')[0].split('/').pop()  === src,
          }"
        >
          {{ src }}
          <!-- {{ src.split("/").pop() }} -->
        </v-card>
      </v-col>
    </v-row>

    <div v-if="target" class="height60">
      <video
        controls
        :src="target"
        autoplay        
        controlsList="nodownload"
      ></video>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      srcs: [],
      target: "",
      ip: null,
    };
  },
  mounted() {
    this.getIp();
    this.setHeader();
  },
  methods: {
    selectTarget(src) {
      if (this.ip != "122.116.138.18")
        this.target =
          "http://192.168.0.149:3000/video/" +
          this.id +
          "/" +
          src +
          "?token=" +
          this.$cookie.get("token");
      else
        this.target =
          "http://192.168.0.149:3000/video/" +
          this.id +
          "/" +
          src +
          "?token=" +
          this.$cookie.get("token");
    },
    getIp() {
      fetch("http://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          this.ip = ip;
          this.getData();
        });
    },
    getData() {
      if (this.ip != "122.116.138.18")
        axios.get("http://192.168.0.149:3000/video/" + this.id).then((res) =>
          res.data.forEach((a) => {
            this.srcs.push(a.src);
          })
        );
      else
        axios.get("http://192.168.0.149:3000/video/" + this.id).then((res) =>
          res.data.forEach((a) => {
            this.srcs.push(a.src);
          })
        );
      //   if (this.ip != '122.116.138.18')
      //   	axios.get('https://122.116.138.18:3000/video/' + this.id).then((res) =>
      //   		res.data.forEach((a) => {
      //   			this.srcs.push(
      //   				'https://122.116.138.18:3000/video/' + this.id + '/' + a.src + '?token=' +  this.$cookie.get('token')
      //   			)
      //   		})
      //   	)
      //   else
      //   	axios.get('https://192.168.0.149:3000/video/' + this.id).then((res) =>
      //   		res.data.forEach((a) => {
      //   			this.srcs.push(
      //   				'https://192.168.0.149:3000/video/' + this.id + '/' + a.src + '?token=' +  this.$cookie.get('token')
      //   			)
      //   		})
      //   	)
    },
    setHeader() {
      if(this.$cookie.get('token') == undefined) this.$router.push("/")
      axios.defaults.headers.common["Authorization"] = this.$cookie.get(
        "token"
      );
    },
  },
};
</script>

<style scoped>
.height60 {
  display: flex;
  height: 70vh;
  justify-content: center;
  /* align-items: center; */
}
video {
  height: 60vh;
  width: 50%;
  outline: none;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.4;
}

.v-card:hover,
.selectedCard {
  opacity: 1 !important;
}
</style>
