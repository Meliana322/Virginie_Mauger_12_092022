import Axios from "axios";

export function getUser(id) {
    return Axios.get(`http://localhost:3000/user/${id}`);
}
export function getUserActivity(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/activity`);
}
export function getUserPerformance(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/performance`);
}
export function getUserAverageSessions(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
}
