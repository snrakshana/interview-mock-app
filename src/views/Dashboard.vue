<template>
  <navbar></navbar>
  <div class="dashboard-page">
    <div class="header">
      <div class="header-title">
        <h2>Monitor</h2>
      </div>
      <div class="header-btn">
        <div class="message-btn">
          <div class="btn-value">Message</div>
        </div>
        <div class="sos-btn">
          <img src="../assets/images/Group_323.png" alt="sos button" />
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
  methods: {
    showLog(id) {
      this.$router.push("/dashboard/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-page {
  padding: 0 40px;
  margin-left: 75px;
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(black, 0.4);
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
</style>