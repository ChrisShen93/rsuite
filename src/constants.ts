export const STATUS_ICON_NAMES: any = {
  info: 'info',
  success: 'check-circle',
  error: 'close-circle',
  warning: 'remind'
};

export const PAGINATION_ICON_NAMES = {
  more: 'more',
  prev: 'page-previous',
  next: 'page-next',
  first: 'page-top',
  last: 'page-end'
};

export const SIZE = ['lg', 'md', 'sm', 'xs'];
export const STATUS = ['success', 'warning', 'error', 'info'];
export const COLOR = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'];

export const PLACEMENT_4 = ['top', 'bottom', 'right', 'left'];
export const PLACEMENT_8 = [
  'bottomStart',
  'bottomEnd',
  'topStart',
  'topEnd',
  'leftStart',
  'rightStart',
  'leftEnd',
  'rightEnd'
];
export const PLACEMENT_AUTO = [
  'auto',
  'autoVerticalStart',
  'autoVerticalEnd',
  'autoHorizontalStart',
  'autoHorizontalEnd'
];

export const PLACEMENT = [].concat(PLACEMENT_4, PLACEMENT_8, PLACEMENT_AUTO);

/**
 *  Check Tree Node State
 */
export enum CHECK_STATE {
  UNCHECK = 0,
  CHECK = 1,
  INDETERMINATE = 2
}