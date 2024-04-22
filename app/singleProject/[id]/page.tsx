import { useRouter } from "next/router"

const SingleProjectPage = ({params: {id}}: any) => {
    const router = useRouter()
    return (
        <div>{id}</div>
    )
}

export default SingleProjectPage

// http://192.168.0.1/SGWXBUNAYTNWJVRA/userRpm/Index.htm