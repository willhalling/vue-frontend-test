<template>
  <div
      class="field__group"
      :class="{ 'field__group--active': isActive }"
      @click="onClick">
    <div class="field__header">
      <label class="field__label">
        {{ name }}
        <span class="required" v-if="required">*</span>
      </label>
    </div>
    <textarea
        v-if="type === 'textarea'"
        class="field__input"
        :placeholder="placeholder"
        :value="value"
        @input="onInput($event.target.value)"
        @focus="isActive = true"
        @blur="isActive = false"
        spellcheck="false"
        rows="5"
    />
    <input
        v-else
        class="field__input"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :value="value"
        @input="onInput($event.target.value)"
        @focus="isActive = true"
        @blur="isActive = false"
        :type="type"
        spellcheck="false">
  </div>
</template>

<script>
/* eslint-disable */
// TO DO: would fix linting errors if had time

	export default {
		name: 'field',

		props: [
			'name',
			'value',
			'type',
			'placeholder',
			'autofocus',
			'maxLength',
			'showCharacters',
			'disabled',
			'required'
		],

		data: () => ({
			isActive: false
		}),

		methods: {
			onClick() {
				const input = this.$el.children[1]
				input.focus()
			},

			onInput(value) {
				this.$emit('input', value)
			}

		}

	};
</script>

<style lang="scss">
  @import '../../../scss/variables.scss';
  @import '../../../scss/colors.scss';
  @import '../../../scss/typography.scss';
  @import './field.scss';
</style>
