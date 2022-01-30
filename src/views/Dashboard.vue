<template>
  <navbar></navbar>
  <div class="dashboard-page">
    <div class="header">
      <div class="header-title">
        <h2>Monitor</h2>
      </div>
      <div class="header-btn">
        <div
          class="message-btn"
          :class="{ danger: isAlert }"
          @click="showAlert()"
        >
          <div class="btn-value">Message</div>
        </div>
        <div class="sos-btn">
          <img src="../assets/images/Group_323.png" alt="sos button" />
        </div>
      </div>
    </div>
    <div class="alert">
      <div class="circle--1" :class="{ danger: isAlert }">
        <div class="circle--2">
          <div class="circle--3">
            <div class="circle--4"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="user-section">
        <user @show="showLog"></user>
      </div>
      <div class="log-section">
        <div class="map-section">
          <location-map></location-map>
        </div>
        <div class="history-section">
          <user-history></user-history>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationMap from "../components/LocationMap.vue";
import Navbar from "../components/Navbar.vue";
import User from "../components/User.vue";
import UserHistory from "../components/UserHistory.vue";
export default {
  components: { User, LocationMap, UserHistory, Navbar },
  name: "Dashboard",
  data() {
    return {
      isAlert: false,
    };
  },
  methods: {
    showLog(id) {
      this.$router.push("/dashboard/" + id);
    },
    showAlert() {
      this.isAlert = !this.isAlert;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-page {
  padding: 0 40px;
  margin-left: 75px;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 2px solid rgba(black, 0.4);
  z-index: 2;
  .header-title {
    padding: 20px;
    font-weight: 700;
  }
  .header-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .message-btn {
      width: fit-content;
      height: fit-content;
      padding: 5px 30px;
      margin-right: 20px;
      background-color: white;
      border: 1px solid rgba(black, 0.5);
      border-radius: 3px;
      z-index: 2;
      cursor: pointer;
      transition: all 0.4s ease-in;
      &.danger {
        background-color: rgb(252, 35, 79);
        color: white;
        border: none;
      }
      &:active {
        transform: scale(0.95);
      }
      .btn-value {
        font-size: 13px;
        font-weight: 700;
      }
      @media only screen and (max-width: 480px) {
        margin-right: 0;
      }
    }
    .sos-btn {
      width: 70px;
      height: 70px;
      display: flex;
      z-index: 2;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
.body {
  padding: 20px 0;
  height: 88vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  .user-section {
    width: 30%;
    height: 100%;
    padding: 20px 10px 0;
    z-index: 2;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .log-section {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 10px;
    z-index: 2;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    .map-section {
      height: 50%;
      width: 100%;
    }

    .history-section {
      height: 50%;
      width: 100%;
    }
  }
}

.alert {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  .circle--1 {
    width: 1000px;
    height: 1000px;
    position: relative;
    background-color: rgba(244, 223, 232, 255);
    border-radius: 50%;
    transform: translate(100%, -100%);
    transition: transform 1s ease;
    &.danger {
      transform: translate(45%, -45%);
    }
    .circle--2 {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 700px;
      width: 700px;
      margin: -350px 0px 0px -350px;
      border-radius: 50%;
      background-color: rgba(253, 237, 241, 255);
      border: 1px solid rgb(252, 35, 79);
      box-shadow: rgb(252 35 79 / 10%) 0px 1px 20px 20px;
    }
    .circle--3 {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 450px;
      width: 450px;
      margin: -225px 0px 0px -225px;
      border-radius: 50%;
      background-color: rgba(253, 214, 224, 255);
      border: 1px solid rgb(252, 35, 79);
    }
    .circle--4 {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 250px;
      width: 250px;
      margin: -125px 0px 0px -125px;
      border-radius: 50%;
      background-color: rgba(254, 218, 227, 255);
      border: 1px solid rgb(252, 35, 79);
      box-shadow: rgb(252 35 79 / 10%) 0px 1px 20px 20px;
    }
  }
}
</style>