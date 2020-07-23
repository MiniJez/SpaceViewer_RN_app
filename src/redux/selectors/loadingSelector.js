import _ from 'lodash'

export const createLoadingSelector = (actions) => (state) => {
    // returns true only when all actions is not loading
    console.log(actions)
    return _(actions)
        .some((action) => _.get(state, `loading.${action}`));
};