import * as works from "lib/works.data"
import Header from "components/Header"

export default function Works() {
    return (
        <>
        <Header></Header>
            <h1>{works.title}</h1>
        </>
    )
}