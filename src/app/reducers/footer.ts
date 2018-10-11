import * as footer from '../actions/footer';
export interface State {
    showFooter: boolean;
}

export const initialState = {
    showFooter: false
};

export function reducer(state = initialState, action: footer.Actions) {
    switch (action.type) {
        case footer.SHOW_FOOTER:
        return {
            showFooter : true
        };
        case footer.HIDE_FOOTER:
        return {
            showFooter : false
        };
        default :
        return state;
    }
}

export const showFooter = (state: State) => state.showFooter;
