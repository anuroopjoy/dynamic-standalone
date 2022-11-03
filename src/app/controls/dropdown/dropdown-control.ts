import { ControlBase } from '../control-base';

export interface DropDownControl extends ControlBase {
  options?: { key: string; value: string }[];
}
