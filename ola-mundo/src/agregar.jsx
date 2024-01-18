import { useStore } from "./store"

export const Agregar = () => {
    const increaseEdadAbuelo= useStore((state) => state.increaseEdadAbuelo)
  return (
    <>
        <button onClick={increaseEdadAbuelo}> Agregar </button>
    </>
  )
}
