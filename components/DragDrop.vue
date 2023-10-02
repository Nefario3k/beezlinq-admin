<template>
  <div>
    <div
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
      @click="chooseImgFile(1)"
      :class="`drag_drop_container ${isDragging ? 'isDragging' : ''} ${
        contentClass ? contentClass : ''
      }  ${preview ? 'preview' : ''}`"
    >
      <div v-if="!preview" class="drop_content">
        <div>
          <Component v-if="svg" :is="svgVal" />
        </div>
        <div>
          <p>
            <span @click="chooseImgFile(0)">Click to Upload</span> or Drag and
            drop
          </p>
          <p class="label">Maximum file size {{ maxSize }}MB</p>
        </div>
      </div>
      <template v-else>
        <p v-if="!allowedValues.includes('image')">{{ previewText }}</p>
        <div
          style="justify-self: flex-start"
          v-else
          class="px-2 d-flex img__preview align-center text-left"
        >
          <img v-if="!showMaxError" width="300" :src="preview" alt="" />
          <div>
            <Button
              v-if="!showMaxError"
              @click="removeMedia"
              :elevation="0"
              :ripple="false"
              style="padding: 0"
              class="p-0 m-0"
              textColor="var(--danger-color)"
              text="Remove"
              width="max-content"
              minWidth="max-content"
              height="max-content"
              color="transparent"
            />
            <p style="color: var(--danger-color)" v-if="showMaxError">
              Maximum file size of {{ maxSize }}mb exceed
            </p>
            <span>{{ previewSize }}</span>
          </div>
        </div>
      </template>
    </div>
    <input
      style="display: none"
      type="file"
      id="inputImg"
      ref="inputImg"
      :accept="allowedValues"
      :multiple="allowMultiple"
      @input="selectImgFile"
    />
  </div>
</template>

<script>
export default {
  props: {
    svg: {
      type: Boolean,
      default: false,
    },
    svgVal: {
      type: String,
      default: "SvgImageUpload",
    },
    maxSize: {
      type: Number,
      default: 1,
    },
    contentClass: {
      type: String,
    },
    allowMultiple: {
      type: Boolean,
      default: true,
    },
    allowedValues: {
      type: String,
      default: "image/x-png,image/gif,image/jpeg,image/jpg",
    },
  },
  emits: ["inputValues", "preview"],
  data() {
    return {
      isDragging: false,
      filesPreview: [],
      preview: null,
      previewText: null,
      previewSize: null,
      showMaxError: false,
    };
  },
  methods: {
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.inputImg.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    onChange() {
      var files = this.$refs.inputImg.files;
      Object.entries(files).forEach(([key, value]) => {
        if (
          this.allowedValues.includes(
            value.name.split(".")[value.name.split(".").length - 1]
          )
        ) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.filesPreview = [
              {
                title: `Image ${this.filesPreview.length + 1}`,
                name: e.target.result,
                size: Math.ceil(value.size / (1024 * 1024)),
              },
            ];
            this.preview = e.target.result;
            this.previewText = value.name;
            let sizeVal = value.size / (1024 * 1024);
            if (sizeVal > this.maxSize) {
              this.showMaxError = true;
            } else {
              this.showMaxError = false;
            }
            if (sizeVal < 1) {
              this.previewSize = (value.size / 1024).toFixed(1) + "Kb";
            } else {
              this.previewSize = sizeVal.toFixed(2) + "Mb";
            }
          };
          reader.readAsDataURL(value);
        }
      });

      this.uploadNdClear();
    },
    selectImgFile(e) {
      let fileInput = e.target;
      let imgFile = fileInput.files;

      // verify if there is content
      if (imgFile && imgFile[0]) {
        Object.entries(imgFile).forEach(([key, value]) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.filesPreview = [
              {
                title: `Image ${this.filesPreview.length + 1}`,
                name: e.target.result,
                size: Math.ceil(value.size / (1024 * 1024)),
              },
            ];
            this.preview = e.target.result;
            this.previewText = value.name;
            let sizeVal = value.size / (1024 * 1024);
            if (sizeVal > this.maxSize) {
              this.showMaxError = true;
            } else {
              this.showMaxError = false;
            }
            if (sizeVal < 1) {
              this.previewSize = (value.size / 1024).toFixed(1) + "Kb";
            } else {
              this.previewSize = sizeVal.toFixed(2) + "Mb";
            }
          };
          reader.readAsDataURL(value);
        });
      } else {
        return;
      }
      this.uploadNdClear();
    },
    chooseImgFile(val) {
      if (val && !this.preview) {
        return;
      }
      this.$refs.inputImg.click();
    },
    removeMedia() {
      // event.stopPropagation();
      this.preview = null;
      this.previewText = null;
      this.previewSize = null;
      this.filesPreview = [];
      this.$emit("preview", structuredClone(this.preview));
    },
    uploadNdClear() {
      setTimeout(() => {
        if (this.filesPreview.length && !this.showMaxError) {
          this.$emit("inputValues", structuredClone(this.filesPreview));
          this.$emit("preview", this.preview);
        }
        this.$refs.inputImg.value = "";
      }, 100);
    },
  },
};
</script>