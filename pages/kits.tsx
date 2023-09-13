import * as kits from "lib/kits.data"
import Header from "components/Header"

export default function Kits() {
    return (
        <>
        <Header></Header>
            <h1>{kits.title}</h1>
        </>
    )
}