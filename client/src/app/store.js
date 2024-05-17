import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { snazApi } from '@/features/api/api-slice'

import tasksReducer from '@/features/tasks/tasks-slice'

export const store = configureStore({
  reducer: {
    [snazApi.reducerPath]: snazApi.reducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }).concat(snazApi.middleware),
})

// required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);