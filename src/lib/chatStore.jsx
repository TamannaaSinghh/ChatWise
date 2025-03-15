import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;
  
    // If user is null/undefined
    if (!user) {
      console.warn("No user found in changeChat.");
      return;
    }
  
    // If blocked field isn't there, default to an empty array
    const blockedByUser = user.blocked || [];
    const currentUserBlocked = currentUser.blocked || [];
  
    //CHECK IF CURRENT USER IS BLOCKED
    if (blockedByUser.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }
  
    //CHECK IF RECEIVER IS BLOCKED
    else if (currentUserBlocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
  
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },

  changeBlock: () => {
    set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
}));
