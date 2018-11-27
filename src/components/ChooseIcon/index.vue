<template>
  <div class="dialog-icons-content">
    <el-dialog title="选择图标" width="27%" v-el-drag-dialog :visible.sync="dialogFormVisible">
      <ul class="icons-content">
        <li v-for="(icon,inx) in icons" :class="{'active-icon':active === icon}" @click="active = icon;">
          <i :class="icon"></i>
        </li>
      </ul>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="entry">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/assets/directive/el-dragDialog'
export default {
  props: [],
  directives: { elDragDialog},
  data(){
    return {
      dialogFormVisible:false,
      icons:[
        'el-icon-menu','fa fa-square','fa fa-address-book','fa fa-address-book-o','fa fa-address-card','fa fa-address-card-o','fa fa-adjust','fa fa-anchor','fa fa-archive',
        'fa fa-bar-chart-o','fa fa-barcode','fa fa-bars','fa fa-bath','fa fa-bathtub','fa fa-battery','fa fa-battery-0','fa fa-battery-1','fa fa-battery-2',
        'fa fa-battery-3','fa fa-battery-4','fa fa-battery-empty','fa fa-battery-full','fa fa-battery-half','fa fa-battery-quarter','fa fa-battery-three-quarters',
        'fa fa-bed','fa fa-beer','fa fa-bell','fa fa-bell-o','fa fa-bell-slash','fa fa-bell-slash-o','fa fa-bicycle','fa fa-binoculars','fa fa-birthday-cake',
        'fa fa-blind','fa fa-bluetooth','fa fa-bluetooth-b','fa fa-bolt','fa fa-bomb','fa fa-book','fa fa-bookmark','fa fa-bookmark-o','fa fa-braille','fa fa-briefcase',
        'fa fa-bug','fa fa-building','fa fa-building-o','fa fa-bullhorn','fa fa-bullseye','fa fa-bus','fa fa-cab','fa fa-calculator','fa fa-calendar','fa fa-calendar-check-o',
        'fa fa-calendar-minus-o','fa fa-calendar-o','fa fa-calendar-plus-o','fa fa-calendar-times-o','fa fa-camera','fa fa-camera-retro','fa fa-car','fa fa-caret-square-o-down',
        'fa fa-caret-square-o-left','fa fa-caret-square-o-right','fa fa-caret-square-o-up','fa fa-cart-arrow-down','fa fa-cart-plus','fa fa-cc','fa fa-certificate','fa fa-check',
        'fa fa-check-circle','fa fa-check-circle-o','fa fa-check-square','fa fa-check-square-o','fa fa-child','fa fa-circle','fa fa-circle-o','fa fa-circle-o-notch','fa fa-circle-thin',
        'fa fa-clock-o','fa fa-clone','fa fa-close','fa fa-cloud','fa fa-cloud-download','fa fa-cloud-upload','fa fa-code','fa fa-code-fork','fa fa-coffee','fa fa-cog','fa fa-cogs',
        'fa fa-comment','fa fa-comment-o','fa fa-commenting','fa fa-commenting-o','fa fa-comments','fa fa-comments-o','fa fa-compass','fa fa-copyright','fa fa-creative-commons',
        'fa fa-credit-card','fa fa-credit-card-alt','fa fa-crop','fa fa-crosshairs','fa fa-cube','fa fa-cubes','fa fa-cutlery','fa fa-dashboard','fa fa-database','fa fa-deaf',
        'fa fa-deafness','fa fa-desktop','fa fa-diamond','fa fa-dot-circle-o','fa fa-download','fa fa-drivers-license','fa fa-drivers-license-o','fa fa-edit','fa fa-ellipsis-h',
        'fa fa-ellipsis-v','fa fa-envelope','fa fa-envelope-o','fa fa-envelope-open','fa fa-envelope-open-o','fa fa-envelope-square','fa fa-eraser','fa fa-exchange','fa fa-exclamation',
        'fa fa-exclamation-circle','fa fa-exclamation-triangle','fa fa-external-link','fa fa-external-link-square','fa fa-eye','fa fa-eye-slash','fa fa-eyedropper','fa fa-fax',
        'fa fa-feed','fa fa-female','fa fa-fighter-jet','fa fa-file-archive-o','fa fa-file-audio-o','fa fa-file-code-o','fa fa-file-excel-o','fa fa-file-image-o','fa fa-file-movie-o',
        'fa fa-file-pdf-o','fa fa-file-photo-o','fa fa-file-picture-o','fa fa-file-powerpoint-o','fa fa-file-sound-o','fa fa-file-video-o','fa fa-file-word-o','fa fa-file-zip-o',
        'fa fa-film','fa fa-filter','fa fa-fire','fa fa-fire-extinguisher','fa fa-flag','fa fa-flag-checkered','fa fa-flag-o','fa fa-flash','fa fa-flask','fa fa-folder','fa fa-folder-o',
        'fa fa-folder-open','fa fa-folder-open-o','fa fa-frown-o','fa fa-futbol-o','fa fa-gamepad','fa fa-gavel','fa fa-gear','fa fa-gears','fa fa-gift','fa fa-glass','fa fa-globe',
        'fa fa-graduation-cap','fa fa-group','fa fa-hand-grab-o','fa fa-hand-lizard-o','fa fa-hand-paper-o','fa fa-hand-peace-o','fa fa-hand-pointer-o','fa fa-hand-rock-o','fa fa-hand-scissors-o','fa fa-hand-spock-o'
      ],
      active:'el-icon-menu'
    }
  },
  computed: {
    
  },
  methods: {
    isShow(dialogFormVisible){
      this.dialogFormVisible = dialogFormVisible
    },
    entry(){
        this.$emit('input',this.active)
        this.dialogFormVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .dialog-icons-content{
    .icons-content{
      overflow: auto;
      height:300px;
      li{
        float: left;
        width:40px;
        height:40px;
        text-align: center;
        line-height: 40px;
        margin:8px;
        cursor: pointer;
        .fa,.el-icon-menu{
          font-size: 20px;
          color:#888;
        }
        &:hover{
          background:#409EFF;
          .fa,.el-icon-menu{
            font-size: 24px;
            line-height: 40px;
            color:#fff;
          }
        }
      }
      li.active-icon{
        background:#409EFF;
        .fa,.el-icon-menu{
          font-size: 24px;
          line-height: 40px;
          color:#fff;
        }
      }
    }
  }
</style>
