import Axios from "axios";

/**
 * @returns {Promise} Promise object represents user infos data
 */

export function getUser(id) {
    return Axios.get(`http://localhost:3000/user/${id}`);
}

/**
 * @returns {Promise} Promise object represents user activity data
 */

export function getUserActivity(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/activity`);
}

/**
 * @returns {Promise} Promise object represents user performance data
 */

export function getUserPerformance(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/performance`);
}

/**
 * @returns {Promise} Promise object represents user average session data
 */

export function getUserAverageSessions(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
}
