db.auth("${username}", "${password}"); // 인증
rs.initiate({ // 레플리카셋 초기화
  _id: "rs0",
  members: [{ _id: 0, host: "mongodb:27017" }]
});

