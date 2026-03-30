const { complaints } = require("../models/complaintModel");

const getInsights = (req, res) => {

  const locationMap = {};

  // 🔁 Loop through complaints
  complaints.forEach(c => {
    const loc = c.location;

    if (!locationMap[loc]) {
      locationMap[loc] = {
        total: 0,
        complaints: []
      };
    }

    locationMap[loc].total += 1;
    locationMap[loc].complaints.push(c);
  });

  // 🎯 Convert to output format
  const result = Object.keys(locationMap).map(loc => {

    const total = locationMap[loc].total;

    let riskLevel = "SAFE";

    if (total >= 10) riskLevel = "HIGH";
    else if (total >= 5) riskLevel = "MEDIUM";

    return {
      location: loc,
      totalComplaints: total,
      riskLevel
    };
  });

  res.json(result);
};

module.exports = { getInsights };
