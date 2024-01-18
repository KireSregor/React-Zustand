import { Agregar } from "./agregar"
import { Disminuir } from "./disminuir"
import { useStore } from "./store"

export function App(){
    const edadAbuelo = useStore((state) => state.edadAbuelo)


    return (
        <>
        <h1>{edadAbuelo}</h1>
            <Agregar />
            <Disminuir />
        </>
    )
}
