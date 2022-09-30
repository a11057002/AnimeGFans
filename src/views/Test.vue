<template>
    <v-container fluid>    
      <div class="height60">
        <div class="vw-100">
          <video
            id="video"
            src=""
            controls
            autoplay
            controlslist="nodownload"
            oncontextmenu="return false;"
          ></video>
        </div>
      </div>
  
      <div>
        <!-- Comment area -->
      </div>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  import Hls from "hls.js";

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
      this.setHeader();
      this.getData();
      var video = document.getElementById('video');
        var videoSrc = 'https://testapi.aylu.tw/[ANi] 來自深淵 烈日的黃金鄉 - 02 [1080P][Baha][WEB-DL][AAC AVC][CHT].m3u8';
        if (Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(videoSrc);
          hls.attachMedia(video);
        }
    },
    methods: {
      selectTarget(src) {
        this.target =
          "https://animeapi.aylu.tw/video/" +
          this.id +
          "/" +
          src +
          "?token=" +
          this.$cookie.get("token");
      },
      getData() {
        axios.get("https://animeapi.aylu.tw/video/" + this.id).then((res) =>
          res.data.forEach((a) => {
            this.srcs.push(a.src);
          })
        );
      },
      setHeader() {
        if (this.$cookie.get("token") == undefined) this.$router.push("/");
        axios.defaults.headers.common["Authorization"] =
          this.$cookie.get("token");
        axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      },
    },
  };
  </script>
  
  <style scoped>
  .height60 {
    display: flex;
    height: 70vh;
    justify-content: center;
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
  