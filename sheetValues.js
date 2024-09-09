function getSheetValue(){
    //https://docs.google.com/spreadsheets/d/1OaDPMQXrWSe1s9KQJi25lHxyRp_eSpBRVVR1WgZJxys/edit?gid=0#gid=0
    // DFR - test 
    const apiKey = 'AIzaSyC4NDy7L_SFNMMJq5vHXyggo-CMYC2UYVk';  // Google API 키
    const spreadsheetId = '1OaDPMQXrWSe1s9KQJi25lHxyRp_eSpBRVVR1WgZJxys';  // 스프레드시트 ID
    const range = "sheetValues";  // A1:A2 지정한 사용자 정의 'dfrData' 로 캡쳐가능
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
    console.log(url)
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.values && data.values.length > 0) {

                const standard = data.values[0][0];  // I1 셀의 값
                const vina1_wh = data.values[1][1];  // VINA 1 - 창고관리
                const vina1_cut = data.values[1][2];  // VINA 1 - 원단, 재단관리
                const vina1_plan = data.values[1][3];  // VINA 1 - 생산 계획 
                const vina1_track = data.values[1][4];  // VINA 1 - 생산 추적
                const vina1_qa = data.values[1][5];  // VINA 1 - 품질 관리  
               
                const vina2_wh = data.values[2][1];  // VINA 1 - 창고관리
                const vina2_cut = data.values[2][2];  // VINA 1 - 원단, 재단관리
                const vina2_plan = data.values[2][3];  // VINA 1 - 생산 계획 
                const vina2_track = data.values[2][4];  // VINA 1 - 생산 추적
                const vina2_qa = data.values[2][5];  // VINA 1 - 품질 관리  

                const phil1_wh = data.values[3][1];  // VINA 1 - 창고관리
                const phil1_cut = data.values[3][2];  // VINA 1 - 원단, 재단관리
                const phil1_plan = data.values[3][3];  // VINA 1 - 생산 계획 
                const phil1_track = data.values[3][4];  // VINA 1 - 생산 추적
                const phil1_qa = data.values[3][5];  // VINA 1 - 품질 관리  

              

                // const cellValue2 = data.values[1][0]; 
                console.log(`>>> standard : ${standard}`);
                console.log(`>>> vina1_wh : ${vina1_wh}`);
                console.log(`>>> vina1_cut : ${vina1_cut}`);
                console.log(`>>> vina1_plan : ${vina1_plan}`);
                console.log(`>>> vina1_track : ${vina1_track}`);
                console.log(`>>> vina1_qa : ${vina1_qa}`);
                console.log(`>>> vina2_wh : ${vina2_wh}`);
                console.log(`>>> vina2_cut : ${vina2_cut}`);

                document.getElementById("vina1_wh").textContent = vina1_wh;
                document.getElementById("vina1_cut").textContent = vina1_cut;
                document.getElementById("vina1_plan").textContent = vina1_plan;
                document.getElementById("vina1_track").textContent = vina1_track;
                document.getElementById("vina1_qa").textContent = vina1_qa;

                document.getElementById("vina2_wh").textContent = vina2_wh;
                document.getElementById("vina2_cut").textContent = vina2_cut;
                document.getElementById("vina2_plan").textContent = vina2_plan;
                document.getElementById("vina2_track").textContent = vina2_track;
                document.getElementById("vina2_qa").textContent = vina2_qa;

                document.getElementById("phil1_wh").textContent = phil1_wh;
                document.getElementById("phil1_cut").textContent = phil1_cut;
                document.getElementById("phil1_plan").textContent = phil1_plan;
                document.getElementById("phil1_track").textContent = phil1_track;
                document.getElementById("phil1_qa").textContent = phil1_qa;

                // document.getElementById("test-content2").textContent = cellValue2;
            } else {
                document.getElementById("sheetvalue1").textContent = 'No data found';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("sheetvalue1").textContent = 'Error loading data';
        });
}