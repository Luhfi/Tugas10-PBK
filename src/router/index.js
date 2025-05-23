import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import BookingView from "../views/Booking.vue";
import HistoryView from "../views/History.vue";
import LocationView from "../views/Location.vue";
import ProfileView from "../views/Profile.vue";

const routes = [
    {path : "/", component: DashboardView},
    {path : "/booking", component: BookingView},
    {path : "/history", component: HistoryView},
    {path : "/location", component: LocationView},
    {path : "/profile", component: ProfileView},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router