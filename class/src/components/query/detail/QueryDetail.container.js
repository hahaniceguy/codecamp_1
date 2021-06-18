import QueryUI from './QueryDetail.presenter'
import { Router, useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";
import {useState} from "react"


const Query = () => {
	const router = useRouter();

	const profile = gql`
		query fetchProfile($name: String) {
			fetchProfile(name: $name) {
				number
				name
				age
				school
			}
		}
	`;

	const { data } = useQuery(profile, {
		variables: {
			name: router.query.name,
		},
	});
    console.log(data)

    return (
        <QueryUI data={data} />
    )
}
export default Query