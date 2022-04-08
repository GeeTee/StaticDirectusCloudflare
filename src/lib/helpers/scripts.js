import { DIRECTUS_URL } from './Env'

// const getMyEnvVar = (MY_VAR) => {
//     // console.log('typeof MY_VAR : ', MY_VAR, typeof MY_VAR)
//     if (typeof MY_VAR !== 'string') return
//     if (process.env.NODE_ENV === 'production') {
//     // For production
//         return process.env.MY_VAR;
//     } else {
//         // For development
//         return MY_VAR;
//     }
// }

const getMyEnvVar = (MY_VAR) => {
    // console.log('typeof MY_VAR : ', MY_VAR, typeof MY_VAR)
    if (typeof MY_VAR !== 'string') return
    return MY_VAR;
}

const scriptsServices = {
    getMyEnvVar,
}
export default scriptsServices