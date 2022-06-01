<script>
import OptionCheckBox from './OptionCheckBox.vue';
import HeaderTitle from '../CommonComponents/HeaderTitle.vue';
export default {
  components: {
    OptionCheckBox,
    HeaderTitle
  },
};
</script>
<template>
<HeaderTitle heading="Text utilites"/>
  <textarea
    v-model="$store.state.textUtils.inputText"
    class="
      form-control
      block
      w-full
      mt-4
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      mb-4
      dark:bg-gray-700 dark:text-gray-100
      focus:border-blue-600 focus:outline-none
    "
    rows="4"
    placeholder="Output will be placed here."
  >
  </textarea>
  <div
    class="
      flex flex-wrap
      -mx-1
      overflow-hidden
      sm:-mx-1
      md:-mx-1
      lg:-mx-1
      xl:-mx-1
    "
  >
    <div
      class="
        my-1
        px-1
        w-1/2
        overflow-hidden
        sm:my-1 sm:px-1 sm:w-1/2
        md:my-1 md:px-1 md:w-1/2
        lg:my-1 lg:px-1 lg:w-1/2
        xl:my-1 xl:px-1 xl:w-1/2
      "
    >
      <OptionCheckBox
        title="Remove Punctuations"
        :checkboxValue="$store.state.textUtils.isRemovePunctuations"
      />
    </div>

    <div
      class="
        my-1
        px-1
        w-1/2
        overflow-hidden
        sm:my-1 sm:px-1 sm:w-1/2
        md:my-1 md:px-1 md:w-1/2
        lg:my-1 lg:px-1 lg:w-1/2
        xl:my-1 xl:px-1 xl:w-1/2
      "
    >
      <OptionCheckBox
        title="Make Uppercase"
        :checkboxValue="$store.state.textUtils.isUppercase"
      />
    </div>

    <div
      class="
        my-1
        px-1
        w-1/2
        overflow-hidden
        sm:my-1 sm:px-1 sm:w-1/2
        md:my-1 md:px-1 md:w-1/2
        lg:my-1 lg:px-1 lg:w-1/2
        xl:my-1 xl:px-1 xl:w-1/2
      "
    >
      <OptionCheckBox
        title="Make Lowercase"
        :checkboxValue="$store.state.textUtils.isLowercase"
      />
    </div>

    <div
      class="
        my-1
        px-1
        w-1/2
        overflow-hidden
        sm:my-1 sm:px-1 sm:w-1/2
        md:my-1 md:px-1 md:w-1/2
        lg:my-1 lg:px-1 lg:w-1/2
        xl:my-1 xl:px-1 xl:w-1/2
      "
    >
      <OptionCheckBox
        title="New Line Remover"
        :checkboxValue="$store.state.textUtils.isNewLineRemover"
      />
    </div>
    <div
      class="
        my-1
        px-1
        w-1/2
        overflow-hidden
        sm:my-1 sm:px-1 sm:w-1/2
        md:my-1 md:px-1 md:w-1/2
        lg:my-1 lg:px-1 lg:w-1/2
        xl:my-1 xl:px-1 xl:w-1/2
      "
    >
      <OptionCheckBox
        title="Extra Spaces Remover"
        :checkboxValue="$store.state.textUtils.isExtraSpacesRemover"
      />
    </div>
    <div
      class="
        my-1
        px-1
        w-1/2
        overflow-hidden
        sm:my-1 sm:px-1 sm:w-1/2
        md:my-1 md:px-1 md:w-1/2
        lg:my-1 lg:px-1 lg:w-1/2
        xl:my-1 xl:px-1 xl:w-1/2
      "
    >
      <OptionCheckBox
        title="Number Remover"
        :checkboxValue="$store.state.textUtils.isNumberRemover"
      />
    </div>
  </div>
</template>
