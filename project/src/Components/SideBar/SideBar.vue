<template>
  <div class="sidebar">
    <!-- <li v-for='item in catagories' v-bind:key="item" >{{item}}</li> -->
    <div class="each" @click='navigateToMovie'>
      <div>
        <svg
          t="1580827691930"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3571"
          width="200"
          height="200"
        >
          <path
            d="M768 170.666667l85.333333 128h-128l-85.333333-128h-85.333333l85.333333 128h-128l-85.333333-128h-85.333334l85.333334 128h-128l-85.333334-128H170.666667c-46.933333 0-84.906667 38.4-84.906667 85.333333L85.333333 768c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V170.666667h-170.666667zM480 650.666667L426.666667 768l-53.333334-117.333333L256 597.333333l117.333333-53.333333L426.666667 426.666667l53.333333 117.333333L597.333333 597.333333l-117.333333 53.333334z m242.773333-141.226667L682.666667 597.333333l-40.106667-87.893333L554.666667 469.333333l87.893333-40.106666L682.666667 341.333333l40.106666 87.893334L810.666667 469.333333l-87.893334 40.106667z"
            p-id="3572"
          />
        </svg>
      </div>
      <div>电影</div>
    </div>
    <div class="each" @click="reading">
      <div>
        <svg
          t="1580826689722"
          class="icon"
          viewBox="0 0 1038 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1115"
          width="200"
          height="200"
        >
          <path
            d="M860.598617 1022.400915l141.300989-37.845018c25.585364-6.880912 40.84936-32.999305 33.823076-59.359983L797.458977 36.104504c-6.929369-25.924564-33.677705-41.285474-58.923869-34.501476l-141.300989 37.845018c-25.633821 6.880912-40.84936 32.999305-33.823076 59.359983l238.215248 889.091409C808.604117 1013.824003 835.303995 1029.136456 860.598617 1022.400915z"
            p-id="1116"
            fill="#1296db"
          />
          <path
            d="M194.264631 1020.801829C220.770681 1020.801829 242.285647 999.480693 242.285647 972.199329L242.285647 51.756157c0-26.84525-21.854165-48.554044-48.021015-48.554044L48.021015 3.202114C21.514965 3.202114 0 24.474793 0 51.756157l0 920.443172c0 26.84525 21.854165 48.554044 48.021015 48.554044L194.264631 1020.753372z"
            p-id="1117"
            fill="#1296db"
          />
          <path
            d="M485.007407 1020.801829c26.50605 0 48.021015-21.27268 48.021015-48.554044L533.028423 51.756157c0-26.84525-21.854165-48.554044-48.021015-48.554044L338.763791 3.202114C312.257741 3.202114 290.742776 24.474793 290.742776 51.756157l0 920.443172c0 26.84525 21.854165 48.554044 48.021015 48.554044L485.007407 1020.753372z"
            p-id="1118"
            fill="#1296db"
          />
        </svg>
      </div>
      <div>读书</div>
    </div>
    <div class="each" @click='navigateToCard'>
      <div>
        <svg
          t="1580827510742"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5708"
          width="200"
          height="200"
        >
          <path
            d="M96 64h360c17.673 0 32 14.327 32 32v333c0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32V96c0-17.673 14.327-32 32-32z m40 64a8 8 0 0 0-8 8v253a8 8 0 0 0 8 8h280a8 8 0 0 0 8-8V136a8 8 0 0 0-8-8H136zM96 509h360c17.673 0 32 14.327 32 32v387c0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32V541c0-17.673 14.327-32 32-32z m40 64a8 8 0 0 0-8 8v307a8 8 0 0 0 8 8h280a8 8 0 0 0 8-8V581a8 8 0 0 0-8-8H136zM568 64h360c17.673 0 32 14.327 32 32v480c0 17.673-14.327 32-32 32H568c-17.673 0-32-14.327-32-32V96c0-17.673 14.327-32 32-32z m40 64a8 8 0 0 0-8 8v400a8 8 0 0 0 8 8h280a8 8 0 0 0 8-8V136a8 8 0 0 0-8-8H608z m-40 528h360c17.673 0 32 14.327 32 32v240c0 17.673-14.327 32-32 32H568c-17.673 0-32-14.327-32-32V688c0-17.673 14.327-32 32-32z m40 64a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h280a8 8 0 0 0 8-8V728a8 8 0 0 0-8-8H608z"
            p-id="5709"
            fill="#1afa29"
          />
        </svg>
      </div>
      <div>卡片</div>
    </div>
    
    <!-- <div class="each" @click="navigateToNote">
      <div>
        <svg
          t="1580827789110"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4492"
          width="200"
          height="200"
        >
          <path d="M814.24 97.8h20v562.04h-20z" fill="#E4EBED" p-id="4493" />
          <path
            d="M850.24 271V668a8.56 8.56 0 0 1-2.32 5.64l-199.32 199.32a8 8 0 0 1-5.76 2.32H207.72l13.08 74.12a32.32 32.32 0 0 0 31.68 26.6 32.36 32.36 0 0 0 5.68-0.52l666.24-120.96a32.36 32.36 0 0 0 26.2-37.4l-96.4-546.48z"
            fill="#40BDFF"
            p-id="4494"
          />
          <path d="M650.96 847.88l172-172h-172v172z" fill="#EFFAFE" p-id="4495" />
          <path
            d="M950.6 817.12l-96.4-546.48-4 0.36v90.52l80.36 455.56a32.36 32.36 0 0 1-26.2 37.4l-661.2 120a32 32 0 0 0 9.32 1.4 32.36 32.36 0 0 0 5.68-0.52l666.24-120.84a32.36 32.36 0 0 0 26.2-37.4z"
            fill="#2197F7"
            p-id="4496"
          />
          <path d="M802.96 675.88l-152 152v20l172-172h-20z" fill="#E4EBED" p-id="4497" />
          <path
            d="M105.2 877.2h64.6l13.24 75.24a50.28 50.28 0 0 0 49.44 41.56 50.88 50.88 0 0 0 8.84-0.76l686.2-121a50.36 50.36 0 0 0 40.8-58.24L852.24 156V89.8a10 10 0 0 0-10-10H263.76a59.76 59.76 0 0 0-117.84 0H105.2a50.32 50.32 0 0 0-50.28 50.28v696.84A50.32 50.32 0 0 0 105.2 877.2z m744-202.24a10.4 10.4 0 0 0 2.84-6.96V271l96.36 546.48a30.32 30.32 0 0 1-24.6 35.08L237.84 973.52a30.28 30.28 0 0 1-35.08-24.56l-12.64-71.76h452.8a10.04 10.04 0 0 0 7.08-2.92z m-196.4 168v-165.2h165.2zM204.84 50a40 40 0 0 1 38.48 30H166.32a40 40 0 0 1 38.52-30z m-129.92 80A30.32 30.32 0 0 1 105.2 100h40v89.48a60 60 0 1 0 119.68 0V139.68a10 10 0 1 0-20 0v49.8a40 40 0 1 1-79.68 0V100h667.04v557.88h-189.28a10 10 0 0 0-10 10v189.32H105.2a30.32 30.32 0 0 1-30.28-30.28z"
            fill="#263238"
            p-id="4498"
          />
          <path
            d="M236 329.32h515.04a10 10 0 0 0 0-20H236a10 10 0 0 0 0 20zM156 409.32h595.04a10 10 0 0 0 0-20H156a10 10 0 0 0 0 20zM156 489.32h595.04a10 10 0 0 0 0-20H156a10 10 0 1 0 0 20zM156 569.32h595.04a10 10 0 0 0 0-20H156a10 10 0 0 0 0 20zM156 649.32h406.8a10 10 0 0 0 0-20H156a10 10 0 0 0 0 20zM156 729.32h406.8a10 10 0 0 0 0-20H156a10 10 0 0 0 0 20zM156 809.32h406.8a10 10 0 0 0 0-20H156a10 10 0 0 0 0 20z"
            fill="#263238"
            p-id="4499"
          />
          <path
            d="M116.92 924h-16v-16a4 4 0 0 0-8 0v16h-16a4 4 0 1 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8z"
            fill="#FFDD00"
            p-id="4500"
          />
          <path
            d="M964 405.32h-16v-16a4 4 0 1 0-8 0v16h-16a4 4 0 0 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8z"
            fill="#40BDFF"
            p-id="4501"
          />
          <path
            d="M930.52 960.36a24 24 0 1 1 24-24 24 24 0 0 1-24 24z m0-40a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM926.52 133.04a24 24 0 1 1 24-24 24 24 0 0 1-24 24z m0-40a16 16 0 1 0 16 16 16 16 0 0 0-16-16z"
            fill="#FFDD00"
            p-id="4502"
          />
        </svg>
      </div>
      <div>笔记</div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      catagories: ["读书", "电影", "资料", "卡片", "笔记"]
    };
  },
  methods: {
    reading: function() {
      this.$router.push("/reading").catch(err => {});
    },
    navigateToNote(){
        this.$router.push('/note').catch(err => {})
    },
    navigateToCard(){
        this.$router.push('/card').catch(err => {})
    },
    navigateToMovie(){
        this.$router.push('/movie').catch(err => {})
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  font-size: 1.2rem;
  border: 1px #cccc solid;
  height: 100%;
  width: 300px;
  top: 50px;
  background: white;
}

.sidebar .each {
  list-style: none;
  border-bottom: 1px #cccc solid;
  padding-top: 2rem;
  padding-left: 3rem;
  padding-bottom: 1.5rem;
  display: flex;
  cursor: pointer;
}

.icon {
  height: 30px;
  width: 30px;
}

.each div:last-child {
  margin-left: 0.8rem;
}

.each:hover {
  background: #e6e6fa;
}
</style>