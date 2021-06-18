const QueryUI = ({data}) => {

    console.dir(data);
    
	return (
		<>
			<div>이름 {data && data.fetchProfile.name}</div>
            <div>나이 {data && data.fetchProfile.age}</div>
            <div>학교 {data && data.fetchProfile.school}</div>            
		</>
	);
}
export default QueryUI