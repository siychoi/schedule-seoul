import EventData from './Eventdata_Seoul_240109.json';

function processData() {
	const dataWithID = EventData.DATA.map((item, index) => {
    // index를 기반으로 각 객체에 ID 추가
    return { ...item, id: index + 1 };
  });
	dataWithID.forEach(item => {
		if (item.CODENAME.startsWith("축제")) {
			item.CODENAME = "축제";
		}
	});
  return dataWithID;
}

export default processData();