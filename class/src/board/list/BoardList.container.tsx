import BoardPageUI from "./BoardList.pressenter";
import { useQuery } from "@apollo/client";
import { FETCH__BOARDS }from "./BoardList.queries"

export default function BoardPage() {

	const { data } = useQuery(FETCH__BOARDS)
    console.log(data)

	return <BoardPageUI data={data}></BoardPageUI>;
}
