// Actions Item
export const ActionsItems = {
    GET_ITEMS: 'get_item',
    LOAD_GET_ITEMS: 'load_get_item',
    RES_GET_ITEMS: 'result_get_item',
    ERR_GET_ITEMS: 'error_get_item',
    HYDRATE: 'HYDRATE',
  }
  
  // API ITEM
  export const API_ITEMS = {
      URL: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/items`
  }
  
  // Function if Failure
  export function failureItems(error) {
    return {
      type: ActionsItems.ERR_GET_ITEMS,
      error,
    }
  }
  
  // Function if LoadItems
  export function loadItems(params = {}) {
    return { type: ActionsItems.GET_ITEMS, ...params }
  }
  
  // Function if LoadItems
  export function loadItemsSuccess(data) {
    return {
      type: ActionsItems.RES_GET_ITEMS,
      data,
    }
  }
  