<template>
	<div>
		<div class="page-helper" v-if="showPageHelper">
			<div class="page-list">
				<span class="page-item" :class="{'disabled': pageindex === 1}" @click="prevPage">上一页</span>
				<span class="page-item" :class="{'disabled': currentPage === totalPage}" @click="nextPage">下一页</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				pageindex: this.pageNumber,
				pagesum: this.pageSizeArray[0],
				showPrevMore: false,
				showNextMore: false
			}
		},
		props: {
			pageNumber: { //当前页面
				type: Number,
				default: 1
			},
			pageSizeArray: { //每页显示数量
				type: Array,
				default() {
					return [10, 20, 30, 50]
				}
			},
			totalCount: { //总条数
				type: Number,
				default: 1000
			},
			pageGroup: { //连续页码个数
				type: Number,
				default: 5
			}
		},
		computed: {
			showPageHelper() {
				return this.totalCount > 0
			},
			totalPage() { //总页数
				return Math.ceil(this.totalCount / this.pagesum);
			},
		},
		methods: {
			prevPage() {
				if(this.pageindex > 1) {
					this.jumpPage(this.pageindex - 1)
				}
			},
			nextPage() {
				if(this.pageindex < this.totalPage) {
					this.jumpPage(this.pageindex + 1)
				}
			},
			showPrevPage() {
				this.pageindex = this.pageindex - this.pageGroup > 0 ? this.pageindex - this.pageGroup : 1
			},
			showNextPage() {
				this.pageindex = this.pageindex + this.pageGroup < this.totalPage ? this.pageindex + this.pageGroup : this.totalPage
			},
		},
		watch: {
			pagesum(newValue, oldValue) {
				if(newValue !== oldValue) {
					if(this.pageindex >= this.totalPage) { //当前页面大于总页面数
						this.pageindex = this.totalPage
					}
					this.$emit('jumpPage', {
						pageindex: this.pageindex,
						pagesum: this.pagesum
					})
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.page-helper {
    font-weight: 500;
    height: 40px;
    text-align: center;
    color: #888;
    margin: 10px auto;
  }
  .page-list {
    font-size: 0;
    height: 50px;
    line-height: 50px;
  }
  .page-list span {
    font-size: 14px;
    margin-right: 5px;
    user-select: none;
  }
  .page-list .page-item {
    border: 1px solid #aaa;
    padding: 5px 8px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
  }
  .page-ellipsis {
    padding: 0 8px;
  }
  .page-jump-to input {
    width: 45px;
    height: 26px;
    font-size: 13px;
    border: 1px solid #aaa;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-align: center;
  }
  .page-list .jump-go-btn {
    font-size: 12px;
  }
  .page-select{
    border: 1px solid #aaa;
    padding: 5px 8px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
  }
  .page-list .page-item .disabled{
    pointer-events: none;
    background: #ddd;
  }
  .page-list .page-current {
    cursor: default;
    color: #fff;
    background: #337ab7;
    border-color: #337ab7;
  }
</style>