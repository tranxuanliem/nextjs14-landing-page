import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CountStore {
  count: number
  increase: () => void
}

const useCountStore = create(
  persist<CountStore>(
    set => ({
      count: 0,
      increase: () => set(state => ({ count: state.count + 1 }))
    }),
    {
      name: 'count-store',
      skipHydration: true
    }
  )
)

export default useCountStore
