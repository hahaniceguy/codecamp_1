import { useRouter } from "next/router";

export default function QueryDetailPage() {
	const router = useRouter();

	console.log(router.query);
	return <div>상세보기</div>;
}
