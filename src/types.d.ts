declare module '@formkit/inputs' {
  import type { ComboboxOptionType } from '@/components/form/ComboBox.vue'

  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    combobox: {
      type: 'combobox'
      options: ComboboxOptionType
      multiple?: boolean
    }
  }
}
