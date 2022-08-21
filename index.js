const record = [ 
    {
     year: "2015", result: "W",
     year: "2014", result: "N/A",
     year: "2013", result: "L",
}
]
  

function superbowlWin(football) {
    let year;
    football.find((record) => {
        if (record.result === "W") {
            year = record.year;
            return true;
        }
        return false;
    });
    return year;
    };




