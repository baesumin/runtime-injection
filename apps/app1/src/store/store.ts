import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface Email {
  id: number;
  sender: string;
  receiver: string;
  content: string;
}

const initialState: Email[] = [
  {
    id: 1,
    sender: "김철수",
    receiver: "나짱구",
    content: "화이팅!!",
  },
  {
    id: 2,
    sender: "나짱구",
    receiver: "나훈이",
    content: "프론트엔드",
  },
  {
    id: 3,
    sender: "나훈이",
    receiver: "김영희",
    content: "백엔드",
  },
  {
    id: 4,
    sender: "이맹구",
    receiver: "나훈이",
    content: "여행가고싶다!!",
  },
];

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    deleteEmail(emails, action: PayloadAction<number>) {
      return emails.filter((email) => email.id !== action.payload);
    },
  },
});

const rootReducer = combineReducers({
  emails: emailSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const { deleteEmail } = emailSlice.actions;
export const emailSelector = (state: ReturnType<typeof store.getState>) =>
  state.emails;

export default store;
