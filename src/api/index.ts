import axios from "axios";

const paths = {
    "hostname": "http://localhost:5052"
}

const client = axios.create({
    baseURL: (paths.hostname + "/api/v1"),
    headers: {},
});

// general app queries
const queries = ({
    // General Query to use any query with a passed queryPath
    query: (queryPath: string, payload?: any, method?: string) => ({
        queryKey: [queryPath],
        queryFn: async () => payload 
            ? (await (client as any)[method || "post"](queryPath, payload)).data
            : (await (client as any)[method || "get"](queryPath)).data
    })
});

export { client, paths, queries };