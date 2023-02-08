import { ExtractPropTypes } from "vue";

// const ListType = ["fileList","picture"]
export const uploadProps = {
	//上传组件的类型：file,image
	type: String,
	// 是否允许文件多选
	multiple: Boolean,
	// 是否限制文件上传类型
	accept: String,
	//是否拖拽上传
	drag: Boolean,
	//是否展示文件列表
	showFileList: Boolean,
};

export type UploadProps = ExtractPropTypes<typeof uploadProps>;
