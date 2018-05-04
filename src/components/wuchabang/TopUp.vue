<template>
  <div>
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_text">
        <h4 class="weui-media-box__title" style="font-weight:bold">充值金额</h4>
        <div class="weui-flex">
          <div class="weui-flex__item option">
            <div class="placeholder">$50.00</div>
          </div>
          <div class="weui-flex__item option selected">
            <div class="placeholder">$100.00</div>
          </div>
          <div class="weui-flex__item option">
            <div class="placeholder">$500.00</div>
          </div>
        </div>
        <div style="margin-top:30px">
          <a href="javascript:;" class="weui-btn weui-btn_primary">充值</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.option {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
.option.selected {
    border: 3px solid #1AAD19;
    color: #1AAD19;
}
</style>
