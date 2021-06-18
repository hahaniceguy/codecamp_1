import { useRouter } from "next/router";
import Query from "../../src/components/query/writer/Query.container"

export default function RouterPage() {
	const router = useRouter();
	const value = "bbb";

	const onClickRoutin = () => {
		router.push(`/query/철수/${value}`);
	};

	return (
		<>
		<Query></Query>
		</>
	);
}
