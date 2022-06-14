import React from 'react';
import axios from "axios";
import {useQuery} from "react-query";

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueriesPage = ({ email }) => {
    const {data: user} = useQuery(['user', email], () => fetchUserByEmail(email))
    const channelId = user?.data.channelId

    const {data: channel} = useQuery(['courses', channelId],
        () => fetchCoursesByChannelId(channelId),
        {
            enabled: !!channelId // convert to bool
        }
    )

    return (
        <div>
            Dependent Queries
        </div>
    );
};

export default DependentQueriesPage;