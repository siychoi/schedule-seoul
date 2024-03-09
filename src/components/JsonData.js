import EventData from './Eventdata_Seoul_240308.json';

function processData() {
	const dataWithID = EventData.DATA.map((item, index) => {
    // index를 기반으로 각 객체에 ID 추가
    return { ...item, id: index + 1 };
  });
	dataWithID.forEach(item => {
		if (item.codename.startsWith("축제")) {
			item.codename = "축제";
		}
		if (item.themecode === null) {
			item.themecode = "기타";
		}

	});


  return dataWithID;
}

export default processData(); 