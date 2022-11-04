export const componentLookup: Record<string, { loader: () => Promise<any> }> = {
  dropdown: {
    loader: () => import('../controls/dropdown/dropdown.component'),
  },
  checkbox: {
    loader: () => import('../controls/checkbox/checkbox.component'),
  },
  textinput: {
    loader: () => import('../controls/text-input/text-input.component'),
  },
  label: {
    loader: () => import('../controls/label/label.component'),
  },
};
