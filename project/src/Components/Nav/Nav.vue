<template>
  <nav class="navbar">
    <div class="loginBtn">
      <button @click="login" data-toggle="modal" data-target="#exampleModalCenter">登录</button>
      <button ><router-link to='/movie-bg'>          
          后台
</router-link>
     </button>
    </div>
    <el-button icon="el-icon-search" circle></el-button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="../../assets/login-img.jpg" alt />
           <div class='input-group'>
              <div class='phone-area'  :class="{phoneAreaActive: phoneInputActive}">
                  <div class='area-code'>+86</div>
                  <input type="text" placeholder="手机号码"  @focus="phoneInputActive=true" @blur="phoneInputActive=false">
              </div>
              <div class='password-area'  :class="{passwordAreaActive: passwordInputActive}">
                  <input type="password"  placeholder="密码" @focus="passwordInputActive=true" @blur="passwordInputActive=false">
                  <div class='pwdCheckbox'>
                        <el-checkbox v-model="checked">记住密码</el-checkbox>
                  </div>
              </div>
           </div>
           <div class='login-register'>
               <div>忘记密码？</div>
               <div class='lr-button'>
                 
                   <button data-toggle="tooltip" data-placement="bottom" title="暂不支持注册">注册</button>
                   <button data-toggle="tooltip" data-placement="bottom" title="暂不支持注册">登录</button>
        
               </div>
           </div>
          </div>
          <div class='divider'></div>
          <div class="modal-footer">
              <div class='other-methods'>
                  <div class='other-methods-text'>其他登录方式</div>
                  <div class='icon-group'>
                      <div class='mail'><svg t="1584972171269" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="200" height="200"><path d="M893.842 217.557H130.159c-16.261 0-29.443 13.182-29.443 29.443v530c0 16.261 13.182 29.443 29.443 29.443h763.683c16.261 0 29.443-13.183 29.443-29.443V247c0-16.261-13.182-29.443-29.443-29.443z m-85.584 58.886L512 507.651 215.742 276.443h592.516zM159.602 747.557v-440.23l334.283 260.885A29.4 29.4 0 0 0 512 574.443a29.4 29.4 0 0 0 18.115-6.231l334.283-260.884v440.229H159.602z" fill="#ffffff" p-id="2284"></path></svg></div>
                      <div class='wechat'><svg t="1584969620742" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1198" width="200" height="200"><path d="M686.6 372.5c4.5 0 9 0.1 13.4 0.3C676.5 246.1 544.2 149 384.5 149 208.2 149 65.3 267.3 65.3 413.2c0 85.6 49.1 161.6 125.3 209.9 1 0.6 2.9 1.8 2.9 1.8l-30.9 95.6L278 662.3l5.4 1.5c31.7 8.7 65.7 13.5 101 13.5 7.2 0 14.3-0.3 21.4-0.6-6.5-20.1-10.1-41.2-10.1-63 0.1-133.2 130.4-241.2 290.9-241.2z m-191-93.2c24.8 0 44.8 19.2 44.8 43 0 23.7-20 43-44.8 43s-44.8-19.3-44.8-43c0-23.8 20-43 44.8-43z m-222.2 85.9c-24.7 0-44.8-19.3-44.8-43s20.1-43 44.8-43c24.8 0 44.9 19.2 44.9 43 0 23.7-20.1 43-44.9 43z m685.3 250.1c0-123.3-120.7-223.2-269.6-223.2-149 0-269.7 99.9-269.7 223.2 0 123.3 120.8 223.2 269.7 223.2 29.8 0 58.5-4 85.3-11.4 1.5-0.4 4.6-1.3 4.6-1.3l97.4 49.2-26-80.8s1.7-1 2.5-1.5c64.3-40.8 105.8-105.1 105.8-177.4z m-363.5-40.6c-20.9 0-37.9-16.3-37.9-36.3 0-20 16.9-36.2 37.9-36.2 20.9 0 37.9 16.2 37.9 36.2 0 20.1-17 36.3-37.9 36.3z m187.6 0c-20.9 0-37.8-16.3-37.8-36.3 0-20 16.9-36.2 37.8-36.2 21 0 37.9 16.2 37.9 36.2 0 20.1-16.9 36.3-37.9 36.3z" fill="#ffffff" p-id="1199"></path></svg></div>
                      <div class='weibo'><svg t="1584972228520" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3185" width="200" height="200"><path d="M690.325333 102.848c-13.802667 2.453333-44.629333 14.293333-44.885333 39.808-0.256 25.493333 27.050667 42.133333 40.832 43.413333 50.88 0 294.208-13.205333 249.706667 221.568-6.165333 25.749333-10.88 65.173333 19.669333 73.472 27.754667 6.976 44.885333-22.016 52.586667-44.096C1011.925333 411.328 1124.458667 74.858667 690.325333 102.848z" p-id="3186" fill="#ffffff"></path><path d="M753.621333 495.786667c0 0-51.008 11.029333-26.88-26.922667 37.888-74.218667-23.786667-196.010667-183.658667-115.072-55.082667 29.354667-55.082667 8.554667-53.248-28.16 4.949333-200.469333-366.634667-57.536-471.914667 203.114667C-41.429333 686.912 53.632 823.552 200.682667 883.2c358.933333 128.128 620.266667-83.904 664.810667-220.949333C924.906667 456.32 753.621333 495.786667 753.621333 495.786667zM409.429333 835.797333c-169.898667 23.338667-320.490667-51.328-336.426667-166.677333-15.850667-115.413333 108.992-227.946667 278.890667-251.285333 169.898667-23.36 320.469333 51.242667 336.405333 166.656C704.170667 699.882667 579.285333 812.330667 409.429333 835.797333z" p-id="3187" fill="#ffffff"></path><path d="M834.624 435.349333c17.088 4.266667 23.744-9.749333 25.621333-22.549333 1.749333-12.8 31.253333-186.325333-158.250667-166.314667-14.336 1.578667-24 10.154667-22.336 22.741333 1.578667 12.608 12.202667 19.669333 20.288 18.709333 8.085333-0.938667 134.656-23.125333 124.288 110.250667C826.133333 410.325333 817.6 431.082667 834.624 435.349333z" p-id="3188" fill="#ffffff"></path><path d="M354.069333 498.624c-88.554667 16.981333-149.461333 87.744-135.978667 158.08 13.482667 70.336 96.256 113.536 184.853333 96.533333 88.576-16.96 149.418667-87.744 135.978667-158.037333C525.376 524.885333 442.666667 481.642667 354.069333 498.624zM343.552 688.384c-30.592 0-55.402667-21.013333-55.402667-47.125333 0-26.005333 24.810667-47.125333 55.402667-47.125333s55.381333 21.12 55.381333 47.125333C398.933333 667.328 374.122667 688.384 343.552 688.384zM434.282667 624.789333c-11.413333 0-23.018667-13.76-23.018667-30.698667 0-16.917333 11.605333-30.634667 23.018667-30.634667s23.061333 13.717333 23.061333 30.634667C457.344 611.050667 445.696 624.789333 434.282667 624.789333z" p-id="3189" fill="#ffffff"></path></svg></div>
                  </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
 data: function(){
     return{
        phoneInputActive: false,
        passwordInputActive: false,
        checked: false
     }
 },
  methods: {
    login() {}
  },
  backstage(){
    console.log('fuck')
    this.$router.push("/movie-bg").catch(err => {})
  }
};
</script>

<style scoped>
@import './Nav.css';

.navbar {
  height: 50px;
  background: #292525;
  position: fixed;
  z-index: 50000;
  width: 100%;
}

.loginBtn {
  position: absolute;
  right: 100px;
}
.loginBtn button {
  padding: 1px 10px;
  font-size: 0.8rem;
  /* color: white; */
  border-radius: 10px;
  border: none;
  outline: none;
}
.loginBtn button:hover {
  color: #c28683;
}

.modal-header {
  border-bottom: none;
}

.modal-body {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: -2rem;
}

.modal-body img {
  height: 180px;
  width: 100%;
  display: inline-block;
  margin: auto;
}

.el-input__suffix-inner::after{
    content: 'hi';
}

.modal-footer{
    border-top: none;
}
</style>