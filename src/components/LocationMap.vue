<template>
  <div class="map-container">
    <div class="map">
      <img src="../assets/images/80_cool_grey.png" alt="map" />
      <div class="map-msg" v-if="!isOpen">live location map here</div>
      <div class="arrow" @click="expand()">
        <img src="../assets/images/Path_86.png" alt="" v-if="isOpen" />
        <img
          src="../assets/images/Path_86.png"
          alt=""
          class="down-arrow"
          v-else
        />
      </div>
      <div class="button-group" v-if="isOpen">
        <div class="reset-btn">Reset Map</div>
        <!-- <div class="resize-btn">
          <div class="zoom-in">
            <img src="../assets/images/Group_571.png" alt="" />
          </div>
          <div class="zoom-out">
            <img src="../assets/images/Group_572.png" alt="" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationMap",
  props: {
    isMapOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.isMapOpen,
    };
  },
  methods: {
    expand() {
      this.isOpen = !this.isOpen;
      this.$emit("expand");
    },
  },
};
</script>

<style lang="scss" scoped>
.map-container {
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
  margin-bottom: 3%;
  height: 100%;
  .map {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .map-msg {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      text-transform: capitalize;
      font-weight: 800;
    }
  }
}
.arrow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  img {
    padding: 10px;
    cursor: pointer;
    &.down-arrow {
      transform: rotate(180deg);
    }
  }
}
.button-group {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .reset-btn {
    padding: 5px 10px;
    border: 1px solid rgb(252, 35, 79);
    font-size: 10px;
    font-weight: 400;
    color: rgb(252, 35, 79);
    border-radius: 20px;
    margin: 5px;
    cursor: pointer;
    transition: transform 0.4s ease-in;
    &:active {
      transform: scale(0.95);
    }
  }
  .resize-btn {
    .zoom-in {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .zoom-out {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>