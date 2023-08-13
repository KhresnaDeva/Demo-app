import { useRouter } from "next/router";

function dashboardpage (){
    const router = useRouter()
    const dashboard = router.query.dashboard

    return <h1>ini dashboard {dashboard}</h1>
}

export default dashboardpage