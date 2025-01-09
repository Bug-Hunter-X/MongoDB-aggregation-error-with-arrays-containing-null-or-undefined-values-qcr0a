```javascript
const pipeline = [
  {
    $match: {
      field: { $exists: true } 
    }
  },
  {
    $unwind: "$field" 
  },
  {
    $match: {
      field: { $ne: null, $ne: undefined }
    }
  },
  {
    $group: {
      _id: "$field", 
      count: { $sum: 1 }
    }
  }
];

db.collection.aggregate(pipeline);
```