<template>
    <div :class="cssParentClass">
        <label class="control-label" v-if="name" :for="id">{{ name }}</label>
        <textarea
                :placeholder="placeholder"
                :id="id"
                :class="cssClass"
                :disabled="disabled"
                @input="onInput($event.target.value)"
                v-model="formatTextString">
        </textarea>
        <span class="help-block" v-if="error">{{ error }}</span>
    </div>
</template>

<script>
export default {
  name: 'TextareaTag',
  components: {},
  props: {
    id: String,
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    placeholder: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    error: String
  },
  computed: {
    cssParentClass () {
      return `textarea${this.error ? ' has-error' : ''}`
    },
    cssClass () {
      return 'form-control'
    }
  },
  data: () => ({
    formatTextString: null
  }),
  mounted () {
    this.formatTextString = this.value ? this.value.replace(/\\n/g, '\n') : ''
  },
  methods: {
    onInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
    @import "../../../scss/variables";
    .textarea {
      .form-control {
        background-color: transparent;
        min-height: 130px;
        min-width: 100%;
        padding: $padding / 2;
        font-size: 0.75em;
        // border-width: 0;
      }
      &--error {

      }
    }
</style>
