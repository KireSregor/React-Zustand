import { useStore } from "./zustand"



export function App(){
    const bears = useStore((state) => state.bears)
    return (
        <h1>{bears} around here...</h1>
    )
}
