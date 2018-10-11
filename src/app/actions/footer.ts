import { Action } from '@ngrx/store';

export const SHOW_FOOTER = '[showFooter] Show_Footer';
export const HIDE_FOOTER = '[hideFooter] Hide_Footer';

export class ShowFooterAction implements Action {
    readonly type = SHOW_FOOTER;
}

export class HideFooterAction implements Action {
    readonly type = HIDE_FOOTER;
}

export type Actions =
      ShowFooterAction
    | HideFooterAction;

