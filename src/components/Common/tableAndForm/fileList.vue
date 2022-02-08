<template>
  <div>
    <div @click.right.prevent.self="handleright($e)">
      <!-- <li
class="file-item"
:class-"{'select’ : item.guid am= id}":title="item.name"
v-for="(item,index) in fileList":key="index"
@dblclick="handleDbClick(item)"@click="handleClick(item)"
@click.right.prevent="handleRightFile($event,item)" 
>
<el-checkbox-group v-model="idList" @change="checkChange"v-if="item">
<el-checkbox :label="item.guid" >
< img :src="getFileSrc(item.type)" />
<span class-"file-p">{{getFileName(item)}}</span></el-checkbox></el-checkbox-group>
<div v-else>
< img :src="getFileSrc(item.type)" />
<span class="file-p">{{getFileName(item)}}</span></div> li>
lass-"file-footer">
pan>文件夹数量【{{folderSum}}】</span> pan>文件数量【{{filesSum}}】</span> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleright(e) {
      console.log(11111111111, e);
      //   this.$emit("", e,type);
    }
  }
};
</script>
