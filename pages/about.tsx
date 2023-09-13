import * as about from "lib/about.data"
import Header from "components/Header"

export default function About() {
    return (
        <>
        <Header></Header>
            <h1>{about.title}</h1>
        </>
    )
}