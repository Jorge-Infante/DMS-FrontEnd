import {AdminLayout} from "../layouts";
import {HomeAdmin} from "../pages/Admin";
import {CreateMovie} from "../pages/Admin/OptionsAdmin"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin
    },
    {
        path: "/createMovie",
        layout: AdminLayout,
        component: CreateMovie
    }
];
export default routesAdmin;