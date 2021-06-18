import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import QueryDetail from "../../../src/components/query/detail/QueryDetail.container"


export default function QueryDetailPage() {
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

	return (
		<>
		<QueryDetail></QueryDetail>
		</>
	);
}
