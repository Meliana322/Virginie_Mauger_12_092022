import Axios from "axios";

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {number} [score]
 * @property {number} [todayScore]
 * @property {object} keyData
 * @property {number} keydata.calorieCount
 * @property {number} keydata.proteinCount
 * @property {number} keydata.carbohydrateCount
 * @property {number} keyData.lipidCount
 * @property {string} userInfos.firstName
 * Get a user id from database
 * @param { String } id
 * @returns {Promise<User>} Promise object represents user infos data
 */

export function getUser(id) {
    return Axios.get(`http://localhost:3000/user/${id}`);
}

/**
 * @typedef {Object} UserActivity
 * @property {number} sessions
 * Get a userId from database
 * @param { String } userId
 * @returns {Promise} Promise object represents user activity data
 */

export function getUserActivity(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/activity`);
}

/**
 * @typedef {Object} UserPerformance
 * @property {string} subject
 * @property {number} value
 * Get a userId id from database
 * @param { String } userId
 * @returns {Promise} Promise object represents user performance data
 */

export function getUserPerformance(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/performance`);
}

/**
 * @typedef {Object} UserAverageSessions
 * @property {number} sessionsLenght
 * @property {number} day
 * @property {number} session
 * Get a userId id from database
 * @param { String } userId
 * @returns {Promise} Promise object represents user average session data
 */

export function getUserAverageSessions(userId) {
    return Axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
}
