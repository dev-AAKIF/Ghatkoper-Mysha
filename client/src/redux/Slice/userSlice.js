// import BaseApi from "../BaseQuery/baseQuery";

// export const userApi = BaseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         userInfo: builder.query({
//             query: () => ({
//                 url: 'users/userInfo',
//                 method: 'Get',
//             })
//         })

//     })
// })

// export default { useUserInfoQuery} = userApi;

// import BaseApi from "../BaseQuery/baseQuery";
import BaseApi from "../BaseQuery/baseQuery";


export const userApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        userInfo: builder.query({
            query: () => ({
                url: 'users/userInfo',
                method: 'Get',
            })
        })

    })
})

export const { useUserInfoQuery } = userApi;