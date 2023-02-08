<template>
	<div class="h-upload">
		<input
			ref="hIpt"
			type="file"
			v-show="false"
			@change="getFilesList"
			:multiple="props.multiple"
			:accept="props.accept" />
		<!-- 上传照片 -->
		<div class="h-upload-image" v-if="props.type === 'image' && !drag">
			<div class="preview-content">
				<!-- 预览图片列表 -->
				<ul class="preview-images-list">
					<li v-for="(file, index) in previewImgList">
						<!-- 页面层 -->
						<div class="view">
							<!-- 图标 -->
							<span class="preview-delete-icon">
								<h-icon
									name="view"
									@click="openMask(index)"
									class="preview-icon"></h-icon>
								<h-icon
									name="delete"
									@click="removeImg(index)"
									class="deletecon"></h-icon>
							</span>
							<!-- 图片 -->
							<img :src="file.url" alt="" />
						</div>
						<!-- modal层 -->
						<h-modal2 v-model:show="isModalVisible">
							<template v-slot:header> 查看图片 </template>
							<template v-slot:body>
								<img :src="modalImgUrl" alt="无法获取图片信息" class="modalImg"
							/></template>
						</h-modal2>
						<!-- <h-modal v-model:show="showMask" v-if="showMask" bgColor="rgb(0,1,0,0.5)">
              <div class="modalContainer">
                <img :src="modalImgUrl" alt="无法获取图片信息" class="modalImg" />
              </div>
            </h-modal> -->
					</li>
					<!-- 点击上传区域 -->
					<div class="upload-area" @click="fileUpload">
						<div>
							<slot name="uploadIcon">
								<h-icon name="view" class="plusIcon"></h-icon>
							</slot>
						</div>
						<div class="tip">
							<slot name="tip">点击上传</slot>
						</div>
					</div>
				</ul>
			</div>
		</div>
		<!-- 上传文件 -->
		<div class="h-upload-file" v-if="props.type === 'file'">
			<div @click="fileUpload" v-if="!props.drag">
				<slot></slot>
			</div>
			<!-- 拖拽上传区域 -->
			<div class="h-upload-dragger" ref="fileArea" @click="fileUpload" v-else>
				<div class="h-upload-content">
					<h-icon name="delete-solid" class="h-upload-icon"></h-icon>
					<div class="h-upload-text">将文件拖拽到此处或<em>点击上传</em></div>
				</div>
			</div>
			<!-- 上传文件列表展示区域 -->
			<div class="h-upload-list-content">
				<!-- 以文件列表的形式展示上传的文件 -->
				<div class="h-upload-list">
					<div v-for="(item, index) in fileList" class="h-upload-list_item">
						<div class="h-upload-list_item-name">{{ item.name }}</div>
						<div class="h-upload-list_item-status-label">
							<h-icon name="delete-solid" @click="delFile(index)"></h-icon>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import "../style/index.less";
import "../style/drag.less";
import { ref, onMounted } from "vue";
import { uploadProps } from "./upload";
onMounted(() => {
	if (!fileArea.value) return;
	fileArea.value.addEventListener(
		"drop",
		(e: any) => {
			e.preventDefault();
			if (e.dataTransfer.files) {
				//拖拽预览图片
				previewImg(e.dataTransfer.files);
				fileList.value.push(...Array.from(e.dataTransfer.files as FileList));
			}
		},
		false,
	);
	fileArea.value.addEventListener(
		"dragover",
		(e: any) => {
			e.preventDefault();
		},
		false,
	);
});
const props = defineProps(uploadProps);
const emits = defineEmits(["getFilesList"]);
// 获取input的dom
const hIpt = ref();
//获取拖拽区域的dom
const fileArea = ref();
// 上传文件列表
const fileList = ref<File[]>([]);
// 图片文件预览列表
const previewImgList = ref<any[]>([]);
//是否开启全屏遮罩层预览图片
const showMask = ref<Boolean>(false);
const isModalVisible = ref<Boolean>(false);

const closeModal = () => {
	isModalVisible.value = false;
};
//获取modal层的图片URL
const modalImgUrl = ref<any>();
const modalName = ref<String>("");
// 触发input点击事件
const fileUpload = () => {
	return hIpt.value.click();
};
// 获取上传文件列表
const getFilesList = (e: Event) => {
	let files = (e.target as HTMLInputElement).files;

	if (!files) return;
	// 预览图片
	previewImg(files);
	fileList.value.push(...Array.from(files));
	//   将文件列表分发给父组件
	emits("getFilesList", fileList.value);
};
//删除文件
const delFile = (index: number) => {
	fileList.value.splice(index, 1);
};
// 本地预览图片
const previewImg = (files: any) => {
	for (let i = 0; i < files.length; i++) {
		previewImgList.value.push({
			// 生成本地url，用于img标签的src
			url: URL.createObjectURL(files[i]),
		});
	}
};
//打开全屏遮罩层，查看图片
const openMask = (index: number) => {
	// showMask.value = true;
	isModalVisible.value = true;
	modalImgUrl.value = previewImgList.value[index].url;
};

const removeImg = (index: number) => {
	previewImgList.value.splice(index, 1);
};
</script>
<script lang="ts">
export default {
	name: "HUpload",
};
</script>
<style lang="scss" scoped></style>
