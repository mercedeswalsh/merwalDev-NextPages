import Header from "components/Header"
import * as blog from "../lib/demo.data"

export default function Blog() {
    return (
        <>
        <Header></Header>
            <h1>{blog.title}</h1>
        </>
    )
}