import { ALLBooks } from "../types/BooksTypes"

const initalValue = { Books: [], pageCount: 1 }
export const BooksReducer = (state = initalValue, action) => {
    switch (action.type) {
        case ALLBooks:
            return { Books: action.data, pageCount: action.pages };
        default:
            return state
    }
}